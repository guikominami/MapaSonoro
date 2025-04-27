import parse from 'html-react-parser';

import { mapMapExplanationData } from '../../assets/data/mapData';

import MapPanelSection from './MapPanelSection';

import Paragraph from '../Paragraph';

const MapPanelFichaTecnica: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapMapExplanationData[iconId];

  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <Paragraph>{parse(mapData.introduction)}</Paragraph>
      <Paragraph>{parse(mapData.text)}</Paragraph>
    </MapPanelSection>
  );
};

export default MapPanelFichaTecnica;
