import Section from '../components/section';
import MainMenuButton from '../components/MainMenuButton';

const MainPage = () => {
  return (
    <Section imageBackground='/images/background/main-bg-blue-mobile.jpg'>
      <div className='flex flex-col md:flex-row items-center justify-center py-15'>
        <MainMenuButton
          imageUrl='/images/icon-experiencia.png'
          imageTextDescription='Experiências sensoriais - Passeio sonoro'
        />
        <MainMenuButton
          imageUrl='/images/icon-dunga.png'
          imageTextDescription='Animação da artista Dunga Rodrigues'
        />
        <MainMenuButton
          imageUrl='/images/icon-exposicao.png'
          imageTextDescription='Exposição virtual'
        />
      </div>
    </Section>
  );
};

export default MainPage;
