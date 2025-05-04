import { Link } from 'react-router-dom';

const MainMenuButton: React.FC<{
  link: string;
  imageUrl: string;
  imageTextDescription: string;
  size: string;
}> = ({ link, imageUrl, imageTextDescription, size }) => {
  const divSize =
    size === 'large' ? 'w-[65%] md:w-[40%]' : 'w-[65%] md:w-[25%]';
  return (
    <div className={divSize}>
      <Link to={link}>
        <img src={imageUrl} alt={imageTextDescription} />
      </Link>
    </div>
  );
};

export default MainMenuButton;
