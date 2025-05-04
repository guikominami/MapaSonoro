import parse from 'html-react-parser';

import { mapBuildingData } from '../../assets/data/mapData';

import MapPanelSection from './MapPanelSection';
import MapPanelLocal from './MapPanelLocal';
import MapPanelTitle from './MapPanelTitle';
import Paragraph from '../Paragraph';

const MapPanelBuilding: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapBuildingData[iconId];

  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <MapPanelTitle title={mapData.title} />
      <MapPanelLocal coordinates={mapData.local} localUrl={mapData.localUrl} />
      <Paragraph>{parse(mapData.description)}</Paragraph>
    </MapPanelSection>
  );
};

export default MapPanelBuilding;
