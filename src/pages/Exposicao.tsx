import Section from '../components/Section';

import imgCriancas from '../assets/imgs/expo/icon-criancas.png';
import imgObrasLiterarias from '../assets/imgs/expo/icon-carroca-capa-expo.png';
import imgUniversoDunga from '../assets/imgs/expo/icon-dunga-capa-expo.png';
import imgFichaTecnica from '../assets/imgs/expo/icon-ficha-tecnica.png';
import BackButton from '../components/BackButton';
import MainMenuButton from '../components/MainMenuButton';

const Exposicao = () => {
  return (
    <Section imageMobileUrl='background/main-bg-blue-mobile.jpg'>
      <BackButton />
      <div className='flex flex-col py-10 px-6 items-center'>
        <div className='flex flex-row mt-10'>
          <MainMenuButton
            imageUrl={imgObrasLiterarias}
            imageTextDescription='Obras literárias'
            link=''
          />
          <MainMenuButton
            imageUrl={imgCriancas}
            imageTextDescription='Para as crianças guardarem'
            link=''
          />
        </div>
        <div className='flex flex-row mt-10'>
          <MainMenuButton
            imageUrl={imgUniversoDunga}
            imageTextDescription='Universo de Dunga Rodrigues'
            link=''
          />
          <MainMenuButton
            imageUrl={imgFichaTecnica}
            imageTextDescription='Ficha técnica'
            link=''
          />
        </div>
      </div>
    </Section>
  );
};

export default Exposicao;
