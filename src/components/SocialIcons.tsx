import React from 'react';
import vk from '../../img/vk.svg'; 

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a href="#">
        <img src={vk} alt="VK" />
      </a>
    </div>
  );
};

export default SocialIcons;