import React, { ReactNode } from 'react';

const ButtonExpo: React.FC<{
  children: ReactNode;
  onButtonClick: () => void;
}> = ({ children, onButtonClick }) => {
  return (
    <button
      className='
        text-orange-400 mr-4 
        font-bold text-lg 
        cursor-pointer
      '
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default ButtonExpo;
