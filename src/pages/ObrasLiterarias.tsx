import Section from '../components/Section';
import BackButton from '../components/BackButton';

import { imgLivros } from '../assets/data/expoData';

const ObrasLiterarias = () => {
  const baseDir = import.meta.env.BASE_URL;
  const activeItem = imgLivros[0];

  return (
    <Section>
      <BackButton linkToGoBack='/exposicao' />
      <div className='flex items-center'>
        <img src={baseDir + activeItem.imageUrl} alt={activeItem.description} />
        <p>Clique na imagem para saber mais detalhes.</p>
      </div>
    </Section>
  );
};

export default ObrasLiterarias;
