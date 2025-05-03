import Section from '../components/Section';
import MainMenuButton from '../components/MainMenuButton';
import Footer from '../components/Footer';

import { mainMenuLinks } from '../assets/data/imagesData';

const MainPage = () => {
  //const baseDir = import.meta.env.BASE_URL;

  return (
    <>
      <Section>
        <div
          className='
          flex flex-col md:flex-row 
          items-center justify-center align-middle
          py-8 md:py-40 mb-4
        '
        >
          {mainMenuLinks.map((item) => (
            <MainMenuButton
              link={item.link}
              imageUrl={item.imageUrl}
              imageTextDescription={item.imageTextDescription}
            />
          ))}
        </div>
        <Footer />
      </Section>
    </>
  );
};

export default MainPage;
