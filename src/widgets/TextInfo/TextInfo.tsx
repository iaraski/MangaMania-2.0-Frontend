import { Box, TextField, Typography } from '@mui/material';
import { useCompositionStore } from '../../entitis/Compositions/CompositionStore';

export default function TextInfo() {
  const { setName, setDescription } = useCompositionStore();
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant='h2'>Название шедевра</Typography>
      <TextField fullWidth onChange={(e) => setName(e.target.value)} />
      <Typography variant='h2' sx={{ marginTop: 1 }}>
        Описание
      </Typography>
      <TextField
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={5}
        id='description'
      />
    </Box>
  );
}
