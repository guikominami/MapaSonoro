import ExpoSection from './ExpoSection';
import Paragraph from '../Paragraph';

const ImageDetail: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
  onCloseIconClick: () => void;
}> = ({ imageUrl, title, description, onCloseIconClick }) => {
  return (
    <ExpoSection onCloseIconClick={onCloseIconClick}>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <div className='flex flex-col md:flex-row'>
        <img
          className='w-100 border-2 border-solid border-orange-600/40 mb-6 mr-6 md:mr-10'
          src={imageUrl}
          alt={description}
        />
        <Paragraph>{description}</Paragraph>
      </div>
    </ExpoSection>
  );
};

export default ImageDetail;
