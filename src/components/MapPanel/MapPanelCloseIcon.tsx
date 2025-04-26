import { AiOutlineClose } from 'react-icons/ai';

const MapPanelCloseIcon: React.FC<{
  onCloseIconClick: () => void;
}> = ({ onCloseIconClick }) => {
  return (
    <span className='flex justify-end mt-3 mr-6'>
      <AiOutlineClose size={30} onClick={onCloseIconClick} />
    </span>
  );
};

export default MapPanelCloseIcon;
