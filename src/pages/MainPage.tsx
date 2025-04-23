import MainMenuButton from '../components/MainMenuButton';
import Footer from '../components/Footer';

import { mainMenuLinks } from '../assets/data/imagesData';

const MainPage = () => {
  return (
    <section
      className='
        bg-[url(/images/background/main-bg-blue-mobile.jpg)] 
        md:bg-[url(/images/background/main-bg-blue.jpg)]
      '
    >
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
    </section>
  );
};

export default MainPage;
