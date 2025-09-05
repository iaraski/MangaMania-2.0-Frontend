import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { MdAccountCircle } from 'react-icons/md';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit' component={RouterLink} to='/'>
          Главная
        </Button>
        <Button color='inherit' component={RouterLink} to='/catalog'>
          Каталог
        </Button>
        <Button color='inherit' component={RouterLink} to='/popular'>
          Популярное
        </Button>
        <Button color='inherit' component={RouterLink} to='/manhwaThisYear'>
          Манхва 2025
        </Button>
        <IconButton color='inherit' component={RouterLink} to='/profile' sx={{ ml: 'auto' }}>
          <MdAccountCircle size={28} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
