import parse from 'html-react-parser';

import iconLocal from '../../assets/icon/iconLocal.png';

import { mapImageData } from '../../assets/data/mapData';

import Paragraph from '../Paragraph';

import MapPanelSection from './MapPanelMain';
import MapPanelCloseIcon from './MapPanelCloseIcon';
import MapPanelTitle from './MapPanelTitle';
import MapPanelSubtitle from './MapPanelSubtitle';

const MapPanel: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapImageData[iconId];

  function handleSoundIconClick() {
    const audio = new Audio(mapData.audioUrl);
    audio.play();
  }

  return (
    <MapPanelSection>
      <MapPanelCloseIcon onCloseIconClick={onCloseIconClick} />
      <div id='main' className='flex flex-col p-6'>
        <MapPanelTitle title={mapData.title} />
        <MapPanelSubtitle
          subtitle={mapData.subtitle}
          onSoundIconClick={handleSoundIconClick}
        />
        <Paragraph>
          <b>Texto: </b> {mapData.author}
        </Paragraph>
        <Paragraph>
          <b>Localização do conto: </b>
          {mapData.local}
        </Paragraph>
        <div className='flex flex-row items-center mb-6'>
          {mapData.coordinates}
          <a
            className='cursor-auto text-blue-800'
            href={mapData.localUrl}
            target='_blank'
          >
            <img
              src={iconLocal}
              alt='ícone de localização com as coordenadas'
              className='w-8 ml-4'
            />
          </a>
        </div>
        <img src={mapData.imageUrl} alt='' className='mb-6' />
        <Paragraph>{parse(mapData.tale)}</Paragraph>
      </div>
    </MapPanelSection>
  );
};

export default MapPanel;
