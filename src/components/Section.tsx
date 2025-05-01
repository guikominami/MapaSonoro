import React, { ReactNode } from 'react';

const Section: React.FC<{ children: ReactNode; imageMobileUrl: string }> = ({
  imageMobileUrl,
  children,
}) => {
  return (
    <section
      className={`
        bg-[url(/images/${imageMobileUrl})] 
        md:bg-[url(/images/background/main-bg-blue.jpg)] 
        bg-cover bg-no-repeat h-[690px]
      `}
    >
      {children}
    </section>
  );
};

export default Section;
