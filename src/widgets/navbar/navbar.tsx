import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { MdAccountCircle } from 'react-icons/md';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../entitis/user/AuthStore';

export default function Navbar() {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isAuth) {
      navigate('/login');
    } else {
      navigate('/profile');
    }
  };
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
        <Button color='inherit' component={RouterLink} to='/create'>
          Добавить шедевр
        </Button>
        <IconButton color='inherit' onClick={handleClick} sx={{ ml: 'auto' }}>
          <MdAccountCircle size={28} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
