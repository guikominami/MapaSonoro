import { Link } from 'react-router-dom';

const MainMenuButton: React.FC<{
  link: string;
  imageUrl: string;
  imageTextDescription: string;
}> = ({ link, imageUrl, imageTextDescription }) => {
  return (
    <div className='w-[65%] md:w-[25%]'>
      <Link to={link}>
        <img src={imageUrl} alt={imageTextDescription} />
      </Link>
    </div>
  );
};

export default MainMenuButton;
