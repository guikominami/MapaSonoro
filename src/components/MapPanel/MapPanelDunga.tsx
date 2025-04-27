import imgDunga from '../../assets/imgs/map/tales/mapa-conto-dunga.jpg';

import MapPanelSection from './MapPanelSection';
import MapPanelLocal from './MapPanelLocal';
import MapPanelTitle from './MapPanelTitle';

const MapPanelDunga: React.FC<{
  onCloseIconClick: () => void;
}> = ({ onCloseIconClick }) => {
  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <MapPanelTitle title='Dunga Rodrigues' />
      <MapPanelLocal
        coordinates='9VRX+FP Porto, Cuiabá – MT'
        localUrl='https://www.google.com.br/maps/place/Fatec+Senai+MT/@-15.6087884,-56.1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2002889,17z/data=!3m1!4b1!4m5!3m4!1s0x939db1efac8af70f:0x688cbb59c2540eb!8m2!3d-15.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%206087884!4d-56.1007003'
      />
      <img
        src={imgDunga}
        alt='Imagem de Dunga Rodrigues sentada tocando piano.'
        className='mb-6'
      />
    </MapPanelSection>
  );
};

export default MapPanelDunga;
