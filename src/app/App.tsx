import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/catalog/Catalog';
import CreateComposition from '../pages/createComposition/CreateComposition';
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';
import ProfilePage from '../pages/profile/ProfilePage';
import Navbar from '../widgets/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<CreateComposition />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
