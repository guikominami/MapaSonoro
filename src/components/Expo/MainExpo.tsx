import { useState, useEffect } from 'react';

import Section from '../Section';
import BackButton from '../BackButton';

import ButtonExpo from '../Expo/ButtonExpo';
import ImageExpo from '../Expo/ImageExpo';

import { imgDataExpo } from '../../assets/data/expoData';

const MainExposition: React.FC<{ imageData: imgDataExpo[] }> = ({
  imageData,
}) => {
  const baseDir = import.meta.env.BASE_URL;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

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

  return (
    <Section>
      <BackButton linkToGoBack='/exposicao' />
      <div className='flex flex-col items-center pt-20'>
        <ImageExpo
          animate={animate}
          imageUrl={baseDir + activeItem.imageUrl}
          description={activeItem.description}
          onNextImage={nextImageClick}
          onPreviousImage={previousImageClick}
        />

        <p className='text-white mt-4'>
          Clique na imagem para saber mais detalhes.
        </p>
        <div className='flex items-stretch justify-between mt-2 '>
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
