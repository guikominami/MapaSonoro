import React from 'react';

const IconMapButton: React.FC<{
  onButtonClick: () => void;
  iconName: string;
  alternativeText: string;
}> = ({ onButtonClick, iconName, alternativeText }) => {
  return (
    <button onClick={onButtonClick}>
      <img src={iconName} alt={alternativeText} />
    </button>
  );
};

export default IconMapButton;
