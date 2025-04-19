import { ReactNode } from 'react';

const Section: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <section className='h-full'>{children}</section>;
};

export default Section;
