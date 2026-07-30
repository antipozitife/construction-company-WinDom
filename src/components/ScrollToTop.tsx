import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/ScrollToTop.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // прокрутка наверх при изменении маршрута
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top-button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Прокрутить страницу наверх"
      title="Наверх"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
