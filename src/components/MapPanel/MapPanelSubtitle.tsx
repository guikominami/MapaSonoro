import React from 'react';
import parse from 'html-react-parser';
import iconSound from '../../assets/icon/iconSound.png';

const MapPanelSubtitle: React.FC<{
  subtitle: string;
  onSoundIconClick: () => void;
}> = ({ subtitle, onSoundIconClick }) => {
  return (
    <div className='flex flex-row items-start justify-between'>
      <h2 className='text-sm mb-2'>{parse(subtitle)}</h2>
      <img
        src={iconSound}
        alt='ícone de auto falante para tocar o som'
        onClick={onSoundIconClick}
        className='w-8'
      />
    </div>
  );
};

export default MapPanelSubtitle;
