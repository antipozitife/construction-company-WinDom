import React from 'react';
import line from '../../img/lineForFooter.svg';
import logo from '../../img/logoForFooter.svg';
import vk from "../../img/vk.svg";
import youtube from "../../img/youtube.svg";
import linkedin from "../../img/linkedin.svg";
import tumblr from "../../img/tumblr.svg";
import mail from '../../img/logoMail.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import './css/Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMortgageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate("/#mortgage");
    };
    const handleTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate("/#team");
    };
  
    const handleContactsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate("/#contacts");
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    };

  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* О КОМПАНИИ */}
        <div className="footer-column">
          <h3>О КОМПАНИИ</h3>
          <img src={line} alt="" aria-hidden="true" />
          <ul>
            <li>
              <Link to="/" onClick={handleHomeClick}>Главная</Link>
            </li>
            <li>
              <Link to="/#team" onClick={handleTeamClick}>Наша команда</Link>
            </li>
            <li>
             <Link to="/#contacts" onClick={handleContactsClick}>Контакты</Link>
            </li>
          </ul>
        </div>

        {/* ПРОЕКТЫ */}
        <div className="footer-column">
          <h3>ПРОЕКТЫ</h3>
          <img src={line} alt="" aria-hidden="true" />
          <ul>
            <li><Link to="/projects/izumrudny">Изумрудный Village</Link></li>
            <li><Link to="/projects/iqclub">IQ CLUB</Link></li>
            <li><Link to="/projects/usadi">Усады</Link></li>
          </ul>
        </div>

        {/* ИПОТЕКА */}
        <div className="footer-column">
          <h3>ИПОТЕКА</h3>
          <img src={line} alt="" aria-hidden="true" />
          <ul>
            <li>
              <Link to="/#mortgage" onClick={handleMortgageClick}>Ипотечный кредит</Link>
            </li>
            <li>
              <Link to="/#mortgage" onClick={handleMortgageClick}>Для семей с детьми</Link>
              </li>
            <li>
              <Link to="/#mortgage" onClick={handleMortgageClick}>Военная ипотека</Link>
              </li>
            <li>
              <Link to="/#mortgage" onClick={handleMortgageClick}>Господдержка</Link>
              </li>
          </ul>
        </div>

        {/* ЛОГО и КОНТАКТЫ */}
        <div className="footer-column footer-brand">

          <div className='logo-groupF'>
            <div className="logo">
              <img src={logo} alt="WinDom" />
            </div>

              <div className="social-iconsF">
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
            </div>

          {/* Email */}
          <div className="email">
            <img src={mail} alt="" aria-hidden="true" />
            <a href="mailto:windom.kazan@gmail.com">windom.kazan@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
