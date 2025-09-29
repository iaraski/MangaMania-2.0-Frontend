import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../../entitis/user/AuthStore';

export default function ProfilePage() {
  const { user, token, fetchCurrentUser, logout, coverImage, setCoverImage, submitCoverImage } =
    useAuthStore();
  const navigate = useNavigate();

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
    }
  }

  if (!user && token) {
    fetchCurrentUser();
  }

  if (!user) return <div>Вы не залогинены</div>;

  function handleButtonCkick() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Container>
        <p>ID: {user.id}</p>
        <p>Имя: {user.username}</p>
        <p>Email: {user.email}</p>
      </Container>

      <label htmlFor='upload-input'>
        <Box
          sx={{
            width: 200,
            height: 300,
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            border: coverImage || !user.avatar_url ? '2px dashed #FFD700' : 'none',
          }}
        >
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt='preview'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt='avatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Typography>Upload</Typography>
          )}
        </Box>
      </label>
      <input
        id='upload-input'
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      <Box>
        <Button onClick={() => submitCoverImage(coverImage!)}>Сохранить</Button>
        <Button onClick={handleButtonCkick}>Выход</Button>
      </Box>
    </Container>
  );
}
