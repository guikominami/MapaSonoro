import parse from 'html-react-parser';

import { AiOutlineClose } from 'react-icons/ai';

import { mapImageData } from '../assets/data/mapData';

const MapPanel: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapImageData[iconId];

  return (
    <div className='h-fit w-90 bg-white flex flex-col'>
      <span className='flex justify-end mt-6 mr-4'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-6'>
        <h1 className='font-bold text-xl mb-4'>{mapData.title}</h1>
        <h2 className='text-sm mb-2'>{parse(mapData.subtitle)}</h2>
        <p>audio</p>
        <p>{mapData.author}</p>
        <p>{mapData.local}</p>
        <p>{mapData.coordinates}</p>
        <p>
          <a href={mapData.localUrl}>Localização</a>
        </p>
        <img src={mapData.imageUrl} alt='' />
        <p>{parse(mapData.tale)}</p>
      </div>
    </div>
  );
};

export default MapPanel;
