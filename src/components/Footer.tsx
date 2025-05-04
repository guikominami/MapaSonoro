import iconTibanare from '../assets/icon/icon_tibanare.png';
import iconInstagram from '../assets/icon/instagram.png';
import iconLinkedin from '../assets/icon/linkedin.png';
import SocialMediaLink from './SocialMediaLink';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div
      className='
        h-20 md:h-35 
        flex flex-row 
        items-center
        justify-around align-middle
      bg-black/30 bg-opacity-10  
      '
    >
      <div className='flex'>
        <SocialMediaLink
          icon={iconInstagram}
          altText='ícone Instagram'
          url='https://www.instagram.com/grupotibanare/'
        />
        <SocialMediaLink
          icon={iconLinkedin}
          altText='ícone Linkedin'
          url='https://www.linkedin.com/in/guilherme-kominami-0205a0ab/'
        />
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
