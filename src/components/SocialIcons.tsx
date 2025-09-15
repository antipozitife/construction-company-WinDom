import React from "react";
import vk from "../../img/vk.svg";
import youtube from "../../img/youtube.svg";
import linkedin from "../../img/linkedin.svg";
import tumblr from "../../img/tumblr.svg";
import "./css/SocialIcons.css";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons">
      <a href="https://youtube.com/@ivandomrostov?si=wO8j8MLDnxF1_glh">
        <img src={youtube} alt="YouTube" />
      </a>
      <a href="https://vk.com/ivan_dom_rostov">
        <img src={vk} alt="VK" />
      </a>
      <a href="https://www.instagram.com/ivan_dom_rostov?igsh=bzJwa2VhMWxoOHBy">
        <img src={linkedin} alt="Instagram" />
      </a>
      <a href="https://t.me/ivandomrosrov">
        <img src={tumblr} alt="Telegram" />
      </a>
    </div>
  );
};

export default SocialIcons;