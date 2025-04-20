import { Link } from 'react-router-dom';

import IconMap from '../components/IconMap';

import iconVoltar from '../assets/imgs/icon-voltar.png';
import iconCarroca from '../assets/imgs/map/icon-carroca.png';
import iconBruxas from '../assets/imgs/map/icon-bruxas.png';
import iconBarao from '../assets/imgs/map/icon-barao.png';
import iconPadre from '../assets/imgs/map/icon-padre.png';
import iconNoiva from '../assets/imgs/map/icon-noiva.png';

const Experiencias = () => {
  return (
    <section
      className='
        bg-[url(/images/map/mapa-mobile.jpg)] 
        md:bg-[url(/images/map/mapa-desktop.jpg)]
        bg-cover bg-no-repeat h-[690px]
      '
    >
      <div className=''>
        <div className='absolute top-3 left-3'>
          <Link to='/'>
            <img className='w-22' src={iconVoltar} alt='voltar' />
          </Link>
        </div>
        <IconMap
          coordinateTop='18'
          coordinateleft='10'
          imageSize='w-22'
          iconName={iconCarroca}
        />
        <IconMap
          coordinateTop='33'
          coordinateleft='30'
          imageSize='w-22'
          iconName={iconBarao}
        />
        <IconMap
          coordinateTop='33'
          coordinateleft='30'
          imageSize='w-22'
          iconName={iconPadre}
        />
        <IconMap
          coordinateTop='53'
          coordinateleft='43'
          imageSize='w-15'
          iconName={iconNoiva}
        />
        <div className='absolute top-53 left-43'>
          <img className='w-15' src={iconNoiva} alt='voltar' />
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
