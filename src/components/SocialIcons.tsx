import React from "react";
import vk from "../../img/vk.svg";
import youtube from "../../img/youtube.svg";
import linkedin from "../../img/linkedin.svg";
import tumblr from "../../img/tumblr.svg";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a href="#">
        <img src={youtube} alt="YOUTUBE" />
      </a>
      <a href="#">
        <img src={vk} alt="VK" />
      </a>
      <a href="#">
        <img src={linkedin} alt="LINKEDIN" />
      </a>
      <a href="#">
        <img src={tumblr} alt="TUMBLR" />
      </a>
    </div>
  );
};

export default SocialIcons;
