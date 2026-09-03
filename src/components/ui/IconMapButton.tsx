import React from 'react';

type IconMapButtonProps = {
  position: string;
  onButtonClick: () => void;
  iconName?: string;
  alternativeText?: string;
  hotspot?: boolean;
};

const IconMapButton: React.FC<IconMapButtonProps> = ({
  position,
  onButtonClick,
  iconName,
  alternativeText,
  hotspot = false,
}) => {
  return (
    <div className={position}>
      <button
        onClick={onButtonClick}
        aria-label={alternativeText}
        className={`cursor-pointer ${hotspot ? 'w-13 h-13 md:w-30 md:h-30' : ''
          }`}
      >
        {!hotspot && iconName && (
          <img
            src={iconName}
            alt={alternativeText || ''}
          />
        )}
      </button>
    </div>
  );
};

export default IconMapButton;
