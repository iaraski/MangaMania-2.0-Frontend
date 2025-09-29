import { Box, Button } from '@mui/material';
import AddChapters from '../../widgets/ChaptersAdd/AddChapters';
import LowPrioInfo from '../../widgets/LowPrioInfo/LowPrioInfo';
import MainInfo from '../../widgets/MainInfo/MainInfo';
import TextInfo from '../../widgets/TextInfo/TextInfo';

export default function CreateComposition() {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'background.default', paddingY: '20px' }}>
      {/* Основная информация */}
      <Box
        sx={{
          display: 'flex',
          width: '70%',
          margin: '20px auto',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
          padding: '1rem',
          borderRadius: '1rem',
          gap: 3,
        }}
        component={'form'}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <MainInfo />
          <TextInfo />
        </Box>

        {/* Жанр, год, тип */}
        <LowPrioInfo />
      </Box>

      {/* Главы */}
      <AddChapters />
      <Button
        variant='contained'
        color='primary'
        sx={{ display: 'block', margin: '20px auto', borderRadius: '0.5rem', fontWeight: 600 }}
      >
        Отправить на модерацию
      </Button>
    </Box>
  );
}
