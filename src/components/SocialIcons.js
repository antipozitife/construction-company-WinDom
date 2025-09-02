import React from 'react';
import vk from '../../img/vk.svg';
// Добавьте импорты для youtube, tumblr и т.д.

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#"><img src={vk} alt="VK" /></a>
      {/* Добавьте другие: youtube, tumblr и т.д. */}
    </div>
  );
};

export default SocialIcons;