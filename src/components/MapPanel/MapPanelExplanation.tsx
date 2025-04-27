import parse from 'html-react-parser';

import { mapMapExplanationData } from '../../assets/data/mapData';

import MapPanelSection from './MapPanelSection';

import Paragraph from '../Paragraph';
import MapPanelTitle from './MapPanelTitle';

const MapPanelExplanation: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapMapExplanationData[iconId];

  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <MapPanelTitle title={mapData.title} />
      <Paragraph>{parse(mapData.text)}</Paragraph>
    </MapPanelSection>
  );
};

export default MapPanelExplanation;
