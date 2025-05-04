import React, { useRef } from 'react';

const ImageExpo: React.FC<{
  onPreviousImage: () => void;
  onNextImage: () => void;
  animate: boolean;
  imageUrl: string;
  description: string;
}> = ({ onPreviousImage, onNextImage, animate, imageUrl, description }) => {
  const movementRef = useRef('');

  function handleTouchMove(touch: React.TouchEvent<HTMLDivElement>) {
    const movement: number = touch.targetTouches[0].clientX;

    if (movement < 170 && movementRef.current === 'end') {
      onPreviousImage();
    } else if (movement > 200 && movementRef.current === 'end') {
      onNextImage();
    }

    movementRef.current = '';
  }

  function handleTouchEnd() {
    movementRef.current = 'end';
  }

  return (
    <div
      className='p-4'
      onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
      onTouchEnd={handleTouchEnd}
    >
      <img
        className={`md:w-100 border-6 border-solid border-orange-400/60 transition-all duration-100 ease-in-out transform ${
          animate ? 'translate-x-2 opacity-0' : 'translate-x-0 opacity-100'
        }`}
        src={imageUrl}
        alt={description}
      />
    </div>
  );
};

export default ImageExpo;
