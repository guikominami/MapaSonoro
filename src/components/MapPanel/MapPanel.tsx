import parse from 'html-react-parser';

import { mapImageData } from '../../assets/data/mapData';

import Paragraph from '../Paragraph';

import MapPanelSection from './MapPanelSection';
import MapPanelTitle from './MapPanelTitle';
import MapPanelSubtitle from './MapPanelSubtitle';
import MapPanelLocal from './MapPanelLocal';

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
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
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
      <MapPanelLocal
        coordinates={mapData.coordinates}
        localUrl={mapData.localUrl}
      />
      <img src={mapData.imageUrl} alt='' className='mb-6' />
      <Paragraph>{parse(mapData.tale)}</Paragraph>
    </MapPanelSection>
  );
};

export default MapPanel;
