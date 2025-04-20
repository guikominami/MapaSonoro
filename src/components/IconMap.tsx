import React from 'react';

const IconMap: React.FC<{
  coordinateTop: string;
  coordinateleft: string;
  imageSize: string;
  iconName: string;
}> = ({ coordinateTop, coordinateleft, imageSize, iconName }) => {
  return (
    <div className={`absolute top-${coordinateTop} left-${coordinateleft}`}>
      <img className={imageSize} src={iconName} alt='' />
    </div>
  );
};

export default IconMap;
