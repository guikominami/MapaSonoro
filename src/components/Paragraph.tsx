import React, { ReactNode } from 'react';

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className='mb-4 md:text-lg'>{children}</p>;
};

export default Paragraph;
