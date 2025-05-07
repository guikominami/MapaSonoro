import MapPanelSection from '../MapPanel/MapPanelSection';
import Paragraph from '../Paragraph';

const ImageDetail: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
  onCloseIconClick: () => void;
}> = ({ imageUrl, title, description, onCloseIconClick }) => {
  return (
    <MapPanelSection onCloseIconClick={onCloseIconClick}>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <img
        className='w-100 border-2 border-solid border-orange-600/40 mb-6'
        src={imageUrl}
        alt={description}
      />
      <Paragraph>{description}</Paragraph>
    </MapPanelSection>
  );
};

export default ImageDetail;
