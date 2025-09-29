import {
  Box,
  MenuItem,
  Select,
  TextField,
  Typography,
  type SelectChangeEvent,
} from '@mui/material';
import { useCompositionStore } from '../../entitis/Compositions/CompositionStore';

export default function LowPrioInfo() {
  const { year, typeComposition, genre, setGenre, setYear, setType } = useCompositionStore();
  const genreArray = [
    'Романтика',
    'Экшен',
    'Фэнтези',
    'Комедия',
    'Драма',
    'Приключения',
    'Мистика',
  ];
  const handleGenreChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setGenre(value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value);
  };

  const typeArray = ['Манхва', 'Манга', 'Маньхуа', 'Другое'];
  const handleTypeChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setType(value);
  };

  return (
    <>
      {/* Жанр, год, тип */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography typography={'h3'} variant='subtitle1' sx={{ marginBottom: 1 }}>
            Жанр
          </Typography>
          <Select
            displayEmpty
            value={genre}
            onChange={handleGenreChange}
            sx={{ color: 'text.primary', borderRadius: '0.5rem' }}
          >
            {genreArray.map((g) => (
              <MenuItem key={g} value={g}>
                {g}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography typography={'h3'} variant='subtitle1' sx={{ marginBottom: 1 }}>
            Год выпуска
          </Typography>
          <TextField
            type='number'
            value={year}
            onChange={handleYearChange}
            sx={{ borderRadius: '0.5rem' }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography typography={'h3'} variant='subtitle1' sx={{ marginBottom: 1 }}>
            Тип
          </Typography>
          <Select
            displayEmpty
            value={typeComposition}
            onChange={handleTypeChange}
            sx={{ color: 'text.primary', borderRadius: '0.5rem' }}
          >
            {typeArray.map((t) => (
              <MenuItem key={t} value={t}>
                {t}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </>
  );
}
