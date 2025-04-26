import React, { ReactNode } from 'react';

const MapPanelSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='
        bg-[url(/images/background/main-bg-white.jpg)] 
        h-fit w-[100%] absolute 
      bg-white flex flex-col '
    >
      {children}
    </div>
  );
};

export default MapPanelSection;
