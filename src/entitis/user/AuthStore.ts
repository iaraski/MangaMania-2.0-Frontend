// useAuthStore.ts
import axios from 'axios';
import { create } from 'zustand';
interface User {
  id: string;
  username: string;
  email: string;
  avatar_url: string;
}
interface AuthState {
  user: User | null;
  token: string | null;
  isAuth: boolean;
  coverImage: File | null;
  login: (name: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchCurrentUser: () => Promise<void>;
  setCoverImage: (file: File | null) => void;
  submitCoverImage: (file: File) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  isAuth: !!localStorage.getItem('token'),
  coverImage: null,

  login: async (username, password) => {
    const res = await axios.post(
      'http://localhost:8000/api/auth/login',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } },
    );
    const { token, user } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, token, isAuth: true });
    console.log(res.data);
  },

  register: async (username, email, password) => {
    const res = await axios.post(
      'http://localhost:8000/api/auth/register',
      {
        username,
        email,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } },
    );
    const { token, user } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, token, isAuth: true });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null, isAuth: false });
  },

  fetchCurrentUser: async () => {
    const token = get().token;
    if (!token) return;

    try {
      const res = await axios.get('http://localhost:8000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      set({ user: res.data, isAuth: true });
      console.log(res);
    } catch {
      set({ user: null, token: null, isAuth: false });
      localStorage.removeItem('token');
    }
  },
  setCoverImage: (file) => set({ coverImage: file }),
  submitCoverImage: async (coverImage: File | null) => {
    if (!coverImage) return;

    const token = get().token;
    console.log('Токен для загрузки:', token);

    if (!token) {
      console.error('Нет токена, невозможно загрузить аватар');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', coverImage);

      const res = await axios.post('http://localhost:8000/api/auth/me/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.avatar_url) {
        set((state) => ({
          user: state.user ? { ...state.user, avatar_url: res.data.avatar_url } : null,
          coverImage: null, // очищаем File после успешной загрузки
        }));
      }
    } catch (err: any) {
      console.error('Ошибка загрузки аватара:', err.response?.data || err.message);
    }
  },
}));
