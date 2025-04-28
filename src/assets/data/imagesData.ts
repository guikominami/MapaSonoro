import iconExperiencia from '../../assets/imgs/main/icon-experiencia.png';
import iconExposicao from '../../assets/imgs/main/icon-exposicao.png';
import iconDunga from '../../assets/imgs/main/icon-dunga-grande.png';

interface ImageLinks {
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
