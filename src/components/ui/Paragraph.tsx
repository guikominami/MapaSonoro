import React, { ReactNode } from 'react';

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className='mb-4 md:text-[1.3rem]'>{children}</p>;
};

export default Paragraph;
