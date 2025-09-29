import { Box, Typography } from '@mui/material';
import { useCompositionStore } from '../../entitis/Compositions/CompositionStore';

export default function MainInfo() {
  const { coverImage, setCoverImage } = useCompositionStore();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverImage(file);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <label htmlFor='upload-input'>
        <Box
          sx={{
            width: 200,
            height: 300,
            border: '2px dashed #FFD700',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          {coverImage ? (
            <img
              src={URL.createObjectURL(coverImage)}
              alt='preview'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <Typography variant='body2' typography='h2'>
              Upload
            </Typography>
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
    </Box>
  );
}
