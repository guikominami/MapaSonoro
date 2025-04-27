import React from 'react';

const IconMapButtonBuildings: React.FC<{
  position: string;
  onButtonClick: () => void;
  iconName?: string;
  alternativeText?: string;
}> = ({ position, onButtonClick }) => {
  return (
    <div className={position}>
      <button onClick={onButtonClick} className='w-13 h-13' />
    </div>
  );
};

export default IconMapButtonBuildings;
