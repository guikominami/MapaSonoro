import iconExperiencia from '../../assets/imgs/main/icon-experiencia.png';
import iconExposicao from '../../assets/imgs/main/icon-exposicao.png';
import iconDunga from '../../assets/imgs/main/icon-dunga-grande.png';
import imgCriancas from '../../assets/imgs/expo/icon-criancas.png';
import imgObrasLiterarias from '../../assets/imgs/expo/icon-carroca-capa-expo.png';
import imgUniversoDunga from '../../assets/imgs/expo/icon-dunga-capa-expo.png';
import imgFichaTecnica from '../../assets/imgs/expo/icon-ficha-tecnica.png';

export interface ImageLinks {
  id: number;
  link: string;
  imageUrl: string;
  imageTextDescription: string;
}

export const mainMenuLinks: ImageLinks[] = [
  {
    id: 1,
    link: 'experiencias',
    imageUrl: iconExperiencia,
    imageTextDescription: 'Experiências sensoriais - Passeio sonoro',
  },
  {
    id: 2,
    link: '',
    imageUrl: iconDunga,
    imageTextDescription: 'Animação da artista Dunga Rodrigues',
  },
  {
    id: 3,
    link: 'exposicao',
    imageUrl: iconExposicao,
    imageTextDescription: 'Exposição virtual',
  },
];

export const expoMenuLinks: ImageLinks[] = [
  {
    id: 1,
    link: 'obras',
    imageUrl: imgObrasLiterarias,
    imageTextDescription: 'Obras literárias',
  },
  {
    id: 2,
    link: 'criancas',
    imageUrl: imgCriancas,
    imageTextDescription: 'Para as crianças guardarem',
  },
  {
    id: 3,
    link: 'universo',
    imageUrl: imgUniversoDunga,
    imageTextDescription: 'Universo de Dunga Rodrigues',
  },
  {
    id: 4,
    link: 'fichatecnica',
    imageUrl: imgFichaTecnica,
    imageTextDescription: 'Ficha técnica',
  },
];
