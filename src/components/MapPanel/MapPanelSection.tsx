import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MapPanelSection: React.FC<{
  children: ReactNode;
  onCloseIconClick: () => void;
}> = ({ children, onCloseIconClick }) => {
  return (
    <div
      className='
        flex flex-col  
        bg-[url(/images/background/main-bg-white.jpg)]
        md:bg-[url()]
        md:bg-white 
        h-fit w-[100%] md:w-[95%] 
        absolute top-0 z-10 px-4 
        md:px-16 md:py-6
        md:mx-10 md:my-10 
      '
    >
      <span className='flex justify-end mr-1 mt-4 md:mt-0 md:mb-6'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-5 md:p-0 md:mb-10'>
        {children}
      </div>
    </div>
  );
};

export default MapPanelSection;
