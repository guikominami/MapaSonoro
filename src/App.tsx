import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Experiencias from './pages/Experiencias';
import Exposicao from './pages/Exposicao';

function App() {
  return (
    <>
      <BrowserRouter basename={'/mapasonoro/'}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/experiencias' element={<Experiencias />} />
          <Route path='/exposicao' element={<Exposicao />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
