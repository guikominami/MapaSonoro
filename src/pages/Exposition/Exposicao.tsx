import Section from '../../components/Section';
import BackButton from '../../components/BackButton';
import ExposicaoColumns from '../../components/Expo/ColumnsExpo';

import { expoMenuLinks } from '../../assets/data/imagesData';

const Exposicao = () => {
  return (
    <Section>
      <BackButton linkToGoBack='/' />
      <div className='flex flex-col py-20 px-6 items-center'>
        <ExposicaoColumns
          imageLink1={expoMenuLinks[0]}
          imageLink2={expoMenuLinks[1]}
        />
        <ExposicaoColumns
          imageLink1={expoMenuLinks[2]}
          imageLink2={expoMenuLinks[3]}
        />
      </div>
    </Section>
  );
};

export default Exposicao;
