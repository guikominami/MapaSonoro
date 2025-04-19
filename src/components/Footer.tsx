import Instagram from '../assets/icon/Instagram';
import LinkedIn from '../assets/icon/LinkedIn';
import iconTibanare from '../assets/icon/icon_tibanare.png';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      className='
        h-20 md:h-25 flex flex-row items-center
        justify-around align-middle bg-black/40
      '
    >
      <div className='flex'>
        <Instagram />
        <LinkedIn />
      </div>
      <div>
        <Link
          to='https://grupotibanare.com.br/Tibanare/index.html'
          target='_blank'
        >
          <img
            className='w-30 md:w-45'
            src={iconTibanare}
            alt='Conheça o grupo Tibanaré.'
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
