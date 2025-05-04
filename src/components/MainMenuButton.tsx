import { Link } from 'react-router-dom';

const MainMenuButton: React.FC<{
  link: string;
  imageUrl: string;
  imageTextDescription: string;
  size: string;
}> = ({ link, imageUrl, imageTextDescription, size }) => {
  return (
    <div className={`w-[65%] md:w-[${size}]`}>
      <Link to={link}>
        <img src={imageUrl} alt={imageTextDescription} />
      </Link>
    </div>
  );
};

export default MainMenuButton;
