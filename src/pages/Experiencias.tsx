import { Link } from 'react-router-dom';

import IconMap from '../components/IconMap';

import iconVoltar from '../assets/imgs/icon-voltar.png';
import iconCarroca from '../assets/imgs/map/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icon-barao.png';
import iconPadre from '../assets/imgs/map/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icon-noiva.png';
import iconDunga from '../assets/imgs/map/icon-dunga.png';
import iconIgreja from '../assets/imgs/map/icon-igreja.png';

const Experiencias = () => {
  return (
    <section
      className='
        bg-[url(/images/map/mapa-mobile.jpg)] 
        md:bg-[url(/images/map/mapa-desktop.jpg)]
        bg-cover bg-no-repeat h-[690px]
      '
    >
      <div className='pt-2 pl-2'>
        <Link to='/'>
          <img className='w-20' src={iconVoltar} alt='voltar' />
        </Link>
      </div>
      <div id='icons' className='grid grid-cols-5'>
        <div className='mt-4 ml-10 w-20'>
          <img src={iconCarroca} alt='' />
        </div>
        <div id='bruxa-dunga'>
          <div className='mt-14 ml-6 w-18'>
            <img src={iconBruxas} alt='voltar' />
          </div>
          <div className='mt-88 ml-6 w-18'>
            <img src={iconDunga} alt='Dunga Ropdrigues' />
          </div>
        </div>
        <div id='barao-noiva' className='mt-25'>
          <div className='mt-4'>
            <img src={iconBarao} alt='voltar' />
          </div>
          <div className='mt-1'>
            <img src={iconNoiva} alt='voltar' />
          </div>
        </div>
        <div className='mt-4'>
          <img src={iconPadre} alt='voltar' />
        </div>
        <div className='mt-4'>
          <img src={iconIgreja} alt='voltar' />
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
