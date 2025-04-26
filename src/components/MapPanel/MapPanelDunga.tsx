import { AiOutlineClose } from 'react-icons/ai';

import Paragraph from '../Paragraph';
import iconLocal from '../../assets/icon/iconLocal.png';
import imgDunga from '../../assets/imgs/map/tales/mapa-conto-dunga.jpg';

import MapPanelSection from './MapPanelMain';

const MapPanelDunga: React.FC<{
  onCloseIconClick: () => void;
}> = ({ onCloseIconClick }) => {
  return (
    <MapPanelSection>
      <span className='flex justify-end mr-6 mt-2'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-6'>
        <h1 className='font-bold text-xl mb-4'>Dunga Rodrigues</h1>
        <Paragraph>
          <b>Localização do conto: </b>9VRX+FP Porto, Cuiabá – MT
        </Paragraph>
        <div className='flex flex-row items-center mb-6'>
          <a
            className='cursor-auto text-blue-800'
            href='https://www.google.com.br/maps/place/Fatec+Senai+MT/@-15.6087884,-56.1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2002889,17z/data=!3m1!4b1!4m5!3m4!1s0x939db1efac8af70f:0x688cbb59c2540eb!8m2!3d-15.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%206087884!4d-56.1007003'
            target='_blank'
          >
            <img
              src={iconLocal}
              alt='ícone de localização com as coordenadas'
              className='w-8 ml-4'
            />
          </a>
        </div>

        <img src={imgDunga} alt='' className='mb-6' />
      </div>
    </MapPanelSection>
  );
};

export default MapPanelDunga;
