import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Experiencias from './pages/Experiencias';
import Exposicao from './pages/Exposicao';
import ObrasLiterarias from './pages/ObrasLiterarias';
import Criancas from './pages/Criancas';
import UniversoDunga from './pages/UniversoDunga';
import FichaTecnica from './pages/FichaTecnica';

function App() {
  return (
    <>
      <BrowserRouter basename={'/mapasonoro/'}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/experiencias' element={<Experiencias />} />
          <Route path='/exposicao' element={<Exposicao />} />
          <Route path='/exposicao/obras' element={<ObrasLiterarias />} />
          <Route path='/exposicao/criancas' element={<Criancas />} />
          <Route path='/exposicao/universo' element={<UniversoDunga />} />
          <Route path='/exposicao/fichatecnica' element={<FichaTecnica />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
