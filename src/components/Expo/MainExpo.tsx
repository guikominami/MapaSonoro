import { useState, useEffect } from 'react';

import Section from '../Section';
import BackButton from '../BackButton';

import ButtonExpo from '../Expo/ButtonExpo';
import ImageExpo from '../Expo/ImageExpo';
import ImageDetail from '../Expo/ImageDetail';

import { imgDataExpo } from '../../assets/data/expoData';

const MainExposition: React.FC<{ imageData: imgDataExpo[] }> = ({
  imageData,
}) => {
  const baseDir = import.meta.env.BASE_URL;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);
  const [imageClick, setImageClick] = useState(false);

  const activeItem = imageData[activeIndex];

  useEffect(() => {
    setAnimate(false);
  }, [activeIndex]);

  function previousImageClick() {
    setAnimate(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        activeIndex === 0 ? imageData.length - 1 : prevIndex - 1
      );
    }, 500);
  }

  function nextImageClick() {
    setAnimate(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        activeIndex === imageData.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);
  }

  function handleImageClick() {
    setImageClick((state) => !state);
  }

  return (
    <Section>
      {imageClick && (
        <ImageDetail
          imageUrl={baseDir + activeItem.imageUrl}
          title={activeItem.title}
          description={activeItem.description}
          onCloseIconClick={handleImageClick}
        />
      )}

      <BackButton linkToGoBack='/exposicao' />
      <div
        className='
          flex flex-col 
          items-center
          pt-12
        '
      >
        <ImageExpo
          animate={animate}
          imageUrl={baseDir + activeItem.imageUrl}
          description={activeItem.description}
          onNextImage={nextImageClick}
          onPreviousImage={previousImageClick}
          onImageClick={handleImageClick}
        />
        {!activeItem.hasDetails && (
          <p className='text-white mx-10'>{activeItem.title}</p>
        )}
        {activeItem.hasDetails && (
          <p className='text-white mt-1'>
            Clique na imagem para saber mais detalhes.
          </p>
        )}
        <div
          className='
            flex items-stretch 
            justify-between mt-2
          '
        >
          <ButtonExpo onButtonClick={previousImageClick}>
            {'< Anterior'}
          </ButtonExpo>
          <ButtonExpo onButtonClick={nextImageClick}>{'Próxima >'}</ButtonExpo>
        </div>
      </div>
    </Section>
  );
};

export default MainExposition;
