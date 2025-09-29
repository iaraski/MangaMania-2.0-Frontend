import { Box, Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../entitis/user/AuthStore';

export default function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let email = e.target.value;
    setUserName(email);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    setPassword(password);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let email = e.target.value;
    setEmail(email);
  };

  const register = useAuthStore((state) => state.register);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      navigate('/profile');
    } catch (err) {
      console.error('Ошибка входа', err);
    }
  };
  const login = useAuthStore((state) => state.login);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/profile');
    } catch (err) {
      console.error('ошибка входа', err);
    }
  };
  const handleChange = (_: unknown, newMode: 'login' | 'register' | null) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'background.default',
        paddingY: '20px',
      }}
    >
      <Box
        sx={{
          width: '60%',
          margin: '0 auto',
          backgroundColor: 'background.paper',
          padding: '1rem',
          borderRadius: '1rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        component={'form'}
      >
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={handleChange}
          sx={{
            margin: 'auto',
            marginBottom: '1rem',
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ToggleButton value='login' sx={{ flex: 1, px: 4 }}>
            Вход
          </ToggleButton>
          <ToggleButton value='register' sx={{ flex: 1, px: 4 }}>
            Регистрация
          </ToggleButton>
        </ToggleButtonGroup>
        <Box>
          <Box sx={{ marginX: '10%', gap: '1rem' }}>
            <Typography typography={'h2'}>Логин</Typography>
            <TextField
              onChange={handleChangeLogin}
              value={username}
              fullWidth
              sx={{ borderRadius: '0.5rem', paddingY: '1rem' }}
            />
          </Box>
          <Box sx={{ marginX: '10%', gap: '1rem' }}>
            <Typography typography={'h2'}>Пароль</Typography>
            <TextField
              value={password}
              onChange={handleChangePassword}
              type='password'
              fullWidth
              sx={{ borderRadius: '0.5rem', paddingY: '1rem' }}
            />
          </Box>
        </Box>
        {mode === 'register' && (
          <Box sx={{ marginX: '10%', gap: '1rem' }}>
            <TextField
              type='email'
              variant='filled'
              label='Почта'
              value={email}
              onChange={handleChangeEmail}
              fullWidth
              sx={{ borderRadius: '0.5rem', paddingY: '1rem' }}
            />
          </Box>
        )}
        <Button
          type='submit'
          variant='contained'
          onClick={mode === 'login' ? handleLogin : handleSubmit}
          sx={{
            display: 'block',
            margin: '20px auto',
            borderRadius: '1rem',
            fontWeight: 600,
            background: 'linear-gradient(90deg,#FFD700,#FFA500)',
            color: 'black',
            boxShadow: 3,
            '&:hover': { background: 'linear-gradient(90deg,#FFA500,#FFD700)' },
          }}
        >
          {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </Box>
    </Box>
  );
}
