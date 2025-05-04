import imgDunga from '../../assets/imgs/map/tales/mapa-conto-dunga.jpg';

import MapPanelLocal from './MapPanelLocal';
import { AiOutlineClose } from 'react-icons/ai';

const MapPanelDunga: React.FC<{
  onCloseIconClick: () => void;
}> = ({ onCloseIconClick }) => {
  return (
    <div
      className='
            flex flex-col  
            bg-[url(/images/background/main-bg-white.jpg)]
            md:bg-[url()]
            md:bg-white 
            h-fit w-[100%] md:w-[30%] 
            absolute top-0 z-10 px-4
            md:mx-140 md:my-20 md:p-10
          '
    >
      <span className='flex justify-end mr-1 mt-4 md:mt-0'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-5 md:p-0'>
        <h1 className='md:text-2xl md:font-bold'>Dunga Rodrigues</h1>
        <MapPanelLocal
          coordinates='9VRX+FP Porto, Cuiabá – MT'
          localUrl='https://www.google.com.br/maps/place/Fatec+Senai+MT/@-15.6087884,-56.1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2002889,17z/data=!3m1!4b1!4m5!3m4!1s0x939db1efac8af70f:0x688cbb59c2540eb!8m2!3d-15.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%206087884!4d-56.1007003'
        />
        <img
          src={imgDunga}
          alt='Imagem de Dunga Rodrigues sentada tocando piano.'
          className='mb-6 md:w-[100%]'
        />
      </div>
    </div>
  );
};

export default MapPanelDunga;
