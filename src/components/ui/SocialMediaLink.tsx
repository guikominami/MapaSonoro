import React from 'react';

const SocialMediaLink: React.FC<{
  icon: string;
  url: string;
  altText: string;
}> = ({ icon, url, altText }) => {
  return (
    <a href={url} target='_blank'>
      <img className='w-8 H-8 md:w-12' src={icon} alt={altText} />
    </a>
  );
};

export default SocialMediaLink;
