import React, { ReactNode } from 'react';

const Section: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section
      className='
        bg-[url(/images/background/main-bg-blue-mobile.jpg)] 
        md:bg-[url(/images/background/main-bg-blue.jpg)] 
        bg-cover bg-no-repeat 
        h-[710px] md:h-[879px]
      '
    >
      {children}
    </section>
  );
};

export default Section;
