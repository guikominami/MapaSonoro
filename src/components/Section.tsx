import { ReactNode } from 'react';

const Section: React.FC<{
  children: ReactNode;
  imgMobile: string;
  imgDesktop: string;
}> = ({ children, imgMobile, imgDesktop }) => {
  //const baseDir = import.meta.env.BASE_URL;

  return (
    <section
      className={`
        bg-[url(/images/map/${imgMobile}.jpg)]
        md:bg-[url(/images/map/${imgDesktop}.jpg)]
        bg-cover bg-no-repeat h-[690px]
      `}
    >
      {children}
    </section>
  );
};

export default Section;
