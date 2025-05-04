import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Experiencias from './pages/Experiencias';
import ExpositionMenu from './pages/Exposition/ExpositionMenu';
import ObrasLiterarias from './pages/Exposition/ObrasLiterarias';
import Criancas from './pages/Exposition/Criancas';
import UniversoDunga from './pages/Exposition/UniversoDunga';
import FichaTecnica from './pages/Exposition/FichaTecnica';

function App() {
  return (
    <>
      <BrowserRouter basename={'/mapasonoro/'}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/experiencias' element={<Experiencias />} />
          <Route path='/exposicao' element={<ExpositionMenu />} />
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
