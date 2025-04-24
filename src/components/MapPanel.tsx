import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { mapImageData } from '../assets/data/mapData';

const MapPanel = () => {
  const mapData = mapImageData['carroca'];

  console.log(mapData);

  return (
    <div className='h-100 bg-white flex flex-col'>
      <div className='flex w-100 justify-end mt-6'>
        <AiOutlineClose size={30} />
      </div>
      <div>{mapData.title}</div>
      <div>{mapData.subtitle}</div>
      <p>audio</p>
      <p>{mapData.author}</p>
      <p>{mapData.local}</p>
      <p>{mapData.coordinates}</p>
      <p>{mapData.localUrl}</p>
      <img src='' alt='' />
      <p>{mapData.tale}</p>
    </div>
  );
};

export default MapPanel;
