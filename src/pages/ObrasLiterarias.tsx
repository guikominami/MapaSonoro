import { useState, useRef, useEffect } from 'react';

import Section from '../components/Section';
import BackButton from '../components/BackButton';
import ButtonExposicao from '../components/ButtonExposicao';

import { imgLivros } from '../assets/data/expoData';

const ObrasLiterarias = () => {
  const baseDir = import.meta.env.BASE_URL;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  const activeItem = imgLivros[activeIndex];

  const movementRef = useRef('');

  useEffect(() => {
    setAnimate(false);
  }, [activeIndex]);

  function previousImageClick() {
    setAnimate(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        activeIndex === 0 ? imgLivros.length - 1 : prevIndex - 1
      );
    }, 500);
  }

  function nextImageClick() {
    setAnimate(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        activeIndex === imgLivros.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);
  }

  function handleTouchMove(touch: React.TouchEvent<HTMLDivElement>) {
    const movement: number = touch.targetTouches[0].clientX;

    if (movement < 170 && movementRef.current === 'end') {
      previousImageClick();
    } else if (movement > 200 && movementRef.current === 'end') {
      nextImageClick();
    }

    movementRef.current = '';
  }

  function handleTouchEnd() {
    movementRef.current = 'end';
  }

  return (
    <Section>
      <BackButton linkToGoBack='/exposicao' />
      <div className='flex flex-col items-center pt-20'>
        <div
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={handleTouchEnd}
        >
          <img
            className={`border-2 border-solid border-orange-400 transition-all duration-100 ease-in-out transform ${
              animate ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
            }`}
            src={baseDir + activeItem.imageUrl}
            alt={activeItem.description}
          />
        </div>

        <p className='text-white mt-4'>
          Clique na imagem para saber mais detalhes.
        </p>
        <div className='flex items-stretch justify-between mt-2 '>
          <ButtonExposicao onButtonClick={previousImageClick}>
            {'< Anterior'}
          </ButtonExposicao>
          <ButtonExposicao onButtonClick={nextImageClick}>
            {'Próxima >'}
          </ButtonExposicao>
        </div>
      </div>
    </Section>
  );
};

export default ObrasLiterarias;
