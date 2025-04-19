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
    imageUrl: '/images/icon-experiencia.png',
    imageTextDescription: 'Experiências sensoriais - Passeio sonoro',
  },
  {
    id: 2,
    link: '',
    imageUrl: '/images/dunga/icon-dunga-grande.png',
    imageTextDescription: 'Animação da artista Dunga Rodrigues',
  },
  {
    id: 3,
    link: 'exposicao',
    imageUrl: '/images/icon-exposicao.png',
    imageTextDescription: 'Exposição virtual',
  },
];
