import React from 'react';

const MapPanelTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className='font-bold text-xl mb-4 md:text-2xl'>{title}</h1>;
};

export default MapPanelTitle;
