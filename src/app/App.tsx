import { Route, Routes } from 'react-router-dom';
import Catalog from '../pages/catalog/Catalog';
import Main from '../pages/main/Main';
import Navbar from '../widgets/navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
    </>
  );
}

export default App;
