import parse from 'html-react-parser';

import { mapImageData } from '../../assets/data/mapData';

import Paragraph from '../ui/Paragraph';

import MapPanelSection from './MapPanelSection';
import MapPanelTitle from './MapPanelTitle';
import MapPanelSubtitle from './MapPanelSubtitle';
import MapPanelLocal from './MapPanelLocal';

const MapPanel: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapImageData[iconId];

  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <div className='md:flex md:flex-row'>
        <div className='md:w-[40%] md:ml-4 md:pr-12'>
          <MapPanelTitle title={mapData.title} />
          <MapPanelSubtitle
            subtitle={mapData.subtitle}
            audio={mapData.audioUrl}
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
          <img src={mapData.imageUrl} alt='' className='mb-6 md:w-[100%]' />
        </div>
        <div className='md:w-[60%] md:px-4'>
          <Paragraph>{parse(mapData.tale)}</Paragraph>
        </div>
      </div>
    </MapPanelSection>
  );
};

export default MapPanel;
