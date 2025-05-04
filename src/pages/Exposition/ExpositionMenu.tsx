import Section from '../../components/Section';
import BackButton from '../../components/BackButton';
import MainMenuButton from '../../components/MainMenuButton';

import { expoMenuLinks } from '../../assets/data/imagesData';

const ExpositionMenu = () => {
  return (
    <Section>
      <BackButton linkToGoBack='/' />
      <div
        className='
          flex flex-col md:flex-row
          py-20 md:py-40
          px-6
          items-center
        '
      >
        <div
          className='
            flex flex-row 
            mt-10 
            md:ml-20 md:w-[100%]
            md:justify-end
          '
        >
          <MainMenuButton
            imageUrl={expoMenuLinks[0].imageUrl}
            imageTextDescription={expoMenuLinks[0].imageTextDescription}
            link={expoMenuLinks[0].link}
            size='large'
          />
          <MainMenuButton
            imageUrl={expoMenuLinks[1].imageUrl}
            imageTextDescription={expoMenuLinks[1].imageTextDescription}
            link={expoMenuLinks[1].link}
            size='large'
          />
        </div>
        <div
          className='
            flex flex-row 
            mt-10 
            md:w-[100%]
            md:justify-start
          '
        >
          <MainMenuButton
            imageUrl={expoMenuLinks[2].imageUrl}
            imageTextDescription={expoMenuLinks[2].imageTextDescription}
            link={expoMenuLinks[2].link}
            size='large'
          />
          <MainMenuButton
            imageUrl={expoMenuLinks[3].imageUrl}
            imageTextDescription={expoMenuLinks[3].imageTextDescription}
            link={expoMenuLinks[3].link}
            size='large'
          />
        </div>
      </div>
    </Section>
  );
};

export default ExpositionMenu;
