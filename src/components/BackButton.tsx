import { Link } from 'react-router-dom';
import iconVoltar from '../assets/imgs/icon-voltar.png';

const BackButton = () => {
  return (
    <Link className='absolute top-[1%] left-[2%]' to='/'>
      <img className='w-20' src={iconVoltar} alt='voltar' />
    </Link>
  );
};

export default BackButton;
