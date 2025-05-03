import MainMenuButton from '../MainMenuButton';
import { ImageLinks } from '../../assets/data/imagesData';

const ExposicaoColumns: React.FC<{
  imageLink1: ImageLinks;
  imageLink2: ImageLinks;
}> = ({ imageLink1, imageLink2 }) => {
  return (
    <div className='flex flex-row mt-10'>
      <MainMenuButton
        imageUrl={imageLink1.imageUrl}
        imageTextDescription={imageLink1.imageTextDescription}
        link={imageLink1.link}
      />
      <MainMenuButton
        imageUrl={imageLink2.imageUrl}
        imageTextDescription={imageLink2.imageTextDescription}
        link={imageLink2.link}
      />
    </div>
  );
};

export default ExposicaoColumns;
