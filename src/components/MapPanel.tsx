import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MapPanel = () => {
  return (
    <div className='h-100 bg-white flex flex-col'>
      <div className='flex w-100 justify-end mt-6'>
        <AiOutlineClose size={30} />
      </div>
      <div>Title</div>
      <div>Subtitulo</div>
      <p>Texto</p>
      <p>Localização</p>
      <img src='' alt='' />
      <p>Conto</p>
    </div>
  );
};

export default MapPanel;
