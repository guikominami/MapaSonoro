import parse from 'html-react-parser';
import iconSound from '../assets/icon/iconSound.png';
import iconLocal from '../assets/icon/iconLocal.png';

import { AiOutlineClose } from 'react-icons/ai';

import { mapImageData } from '../assets/data/mapData';

import Paragraph from './Paragraph';

const MapPanel: React.FC<{
  iconId: string;
  onCloseIconClick: () => void;
}> = ({ iconId, onCloseIconClick }) => {
  const mapData = mapImageData[iconId];

  function handleSoundIconClick() {
    const audio = new Audio(mapData.audioUrl);
    audio.play();
  }

  return (
    <div className='h-fit w-90 bg-white flex flex-col'>
      <span className='flex justify-end mt-6 mr-4'>
        <AiOutlineClose size={30} onClick={onCloseIconClick} />
      </span>
      <div id='main' className='flex flex-col p-6'>
        <h1 className='font-bold text-xl mb-4'>{mapData.title}</h1>
        <h2 className='text-sm mb-2'>{parse(mapData.subtitle)}</h2>
        <Paragraph>
          <img
            src={iconSound}
            alt='ícone de auto falante para tocar o som'
            onClick={handleSoundIconClick}
            className='w-8'
          />
        </Paragraph>
        <Paragraph>{mapData.author}</Paragraph>
        <Paragraph>{mapData.local}</Paragraph>
        <div className='flex flex-col text-sm'>
          <Paragraph>
            {mapData.coordinates}
            <a
              className='cursor-auto text-blue-800'
              href={mapData.localUrl}
              target='_blank'
            >
              <img
                src={iconLocal}
                alt='ícone de localização com as coordenadas'
                className='w-5'
              />
            </a>
          </Paragraph>
        </div>

        <img src={mapData.imageUrl} alt='' />
        <Paragraph>{parse(mapData.tale)}</Paragraph>
      </div>
    </div>
  );
};

export default MapPanel;
