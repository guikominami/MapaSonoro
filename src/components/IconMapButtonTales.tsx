import React from 'react';

const IconMapButton: React.FC<{
  position: string;
  onButtonClick: () => void;
  iconName?: string;
  alternativeText?: string;
}> = ({ position, onButtonClick, iconName, alternativeText }) => {
  return (
    <div className={position}>
      <button onClick={onButtonClick}>
        <img src={iconName} alt={alternativeText} />
      </button>
    </div>
  );
};

export default IconMapButton;
