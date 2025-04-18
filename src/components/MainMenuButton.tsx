import React from 'react';

const MainMenuButton: React.FC<{
  imageUrl: string;
  imageTextDescription: string;
}> = ({ imageUrl, imageTextDescription }) => {
  return (
    <div className='w-[60%]'>
      <img src={imageUrl} alt={imageTextDescription} />
    </div>
  );
};

export default MainMenuButton;
