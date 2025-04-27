import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MapPanelSection: React.FC<{
  children: ReactNode;
  onCloseIconClick: () => void;
}> = ({ children, onCloseIconClick }) => {
  return (
    <div
      className='
        bg-[url(/images/background/main-bg-white.jpg)] 
        h-fit w-[100%] absolute z-10 px-4
        flex flex-col '
    >
      <span className='flex justify-end mr-1 mt-4'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-5'>
        {children}
      </div>
    </div>
  );
};

export default MapPanelSection;
