import { Link } from 'react-router-dom';
import iconVoltar from '../../assets/imgs/icon-voltar.png';

const BackButton: React.FC<{ linkToGoBack: string }> = ({ linkToGoBack }) => {
  return (
    <Link className='absolute top-[2%] left-[3%]' to={linkToGoBack}>
      <img className='w-20 md:w-36' src={iconVoltar} alt='voltar' />
    </Link>
  );
};

export default BackButton;
