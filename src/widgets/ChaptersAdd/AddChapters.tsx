import { Box, Button, IconButton, Typography } from '@mui/material';
import { MdClose } from 'react-icons/md';
import { useCompositionStore } from '../../entitis/Compositions/CompositionStore';

export default function AddChapters() {
  const { chapters, addChapter, addImageToChapter, removeImageFromChapter } = useCompositionStore();
  const handleAddChapter = () => {
    addChapter();
  };
  const handleAddImage = (chapterIndex: number, file: File) => {
    addImageToChapter(chapterIndex, file);
  };
  const handleRemoveImage = (chapterIndex: number, imageIndex: number) => {
    removeImageFromChapter(chapterIndex, imageIndex);
  };
  return (
    <Box sx={{ width: '100%' }}>
      {chapters.map((chapter, chapterIndex) => (
        <Box
          key={chapter.id}
          sx={{
            width: '70%',
            margin: '20px auto',
            backgroundColor: 'background.paper',
            padding: '1rem',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography typography={'h3'} variant='h3'>
            Глава {chapter.id}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {chapter.images.map((src, i) => (
              <Box
                key={i}
                sx={{
                  position: 'relative',
                  width: 120,
                  height: 160,
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  border: '2px solid #FFD700',
                }}
              >
                <img
                  src={src.preview}
                  alt={`page-${i}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                  size='small'
                  onClick={() => handleRemoveImage(chapterIndex, i)}
                  sx={{
                    position: 'absolute',
                    top: 2,
                    right: 2,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                  }}
                >
                  <MdClose fontSize='small' />
                </IconButton>
              </Box>
            ))}

            {/* Кнопка + */}
            <label>
              <input
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0])
                    handleAddImage(chapterIndex, e.target.files[0]);
                }}
              />
              <Box
                sx={{
                  width: 120,
                  height: 160,
                  border: '2px dashed #FFD700',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'text.secondary',
                  fontSize: '2rem',
                }}
              >
                +
              </Box>
            </label>
          </Box>
        </Box>
      ))}

      <Button
        onClick={handleAddChapter}
        variant='contained'
        sx={{ display: 'flex', margin: 'auto', borderRadius: '0.5rem', fontWeight: 600 }}
      >
        Добавить главу
      </Button>
    </Box>
  );
}
