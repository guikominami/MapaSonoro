import { ReactNode } from 'react';

const Section: React.FC<{ children: ReactNode; imageBackground: string }> = ({
  children,
  imageBackground,
}) => {
  return (
    <section
      className='h-full'
      style={{ backgroundImage: `url(${imageBackground})` }}
    >
      {children}
    </section>
  );
};

export default Section;
