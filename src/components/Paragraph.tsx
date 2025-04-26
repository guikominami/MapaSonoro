import React, { Children } from 'react';

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <p className='mb-4'>{children}</p>;
};

export default Paragraph;
