// useCompositionStore.ts
import { create } from 'zustand';

type ChapterImage = { file: File; preview: string };

interface CompositionState {
  name: string;
  description: string;
  genre: string;
  year: string;
  author: string | null;
  typeComposition: string;
  coverImage: File | null;
  chapters: { id: number; images: ChapterImage[] }[];

  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setGenre: (genre: string) => void;
  setYear: (year: string) => void;
  setType: (type: string) => void;
  setCoverImage: (file: File | null) => void;
  addChapter: () => void;
  addImageToChapter: (chapterIndex: number, file: File) => void;
  removeImageFromChapter: (chapterIndex: number, imageIndex: number) => void;
}

export const useCompositionStore = create<CompositionState>((set) => ({
  name: '',
  description: '',
  genre: '',
  year: '',
  author: JSON.parse(localStorage.getItem('user') || '{}')?.username || null,
  typeComposition: '',
  coverImage: null,
  chapters: [{ id: 1, images: [] }],

  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  setGenre: (genre) => set({ genre }),
  setYear: (year) => set({ year }),
  setType: (typeComposition) => set({ typeComposition }),
  setCoverImage: (file) => set({ coverImage: file }),

  addChapter: () =>
    set((state) => ({
      chapters: [...state.chapters, { id: state.chapters.length + 1, images: [] }],
    })),

  addImageToChapter: (chapterIndex, file) =>
    set((state) => {
      const newChapters = [...state.chapters];
      newChapters[chapterIndex].images.push({
        file,
        preview: URL.createObjectURL(file),
      });
      return { chapters: newChapters };
    }),
  removeImageFromChapter: (chapterIndex, imageIndex) =>
    set((state) => {
      const newChapters = [...state.chapters];
      const [removed] = newChapters[chapterIndex].images.splice(imageIndex, 1);
      if (removed) {
        URL.revokeObjectURL(removed.preview);
      }
      return { chapters: newChapters };
    }),
}));
