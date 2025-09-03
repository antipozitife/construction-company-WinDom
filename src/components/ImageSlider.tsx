import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../img/ImageSlider1.svg';

const images = [image1, image1, image1, image1];
const AUTO_SWITCH_INTERVAL = 5000;

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, AUTO_SWITCH_INTERVAL);
    return () => resetTimeout();
  }, [current]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const getPrevIndex = (index: number) => (index - 1 + images.length) % images.length;
  const getNextIndex = (index: number) => (index + 1) % images.length;

  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {images.map((img, index) => {
          const isActive = index === current;
          const isPrev = index === getPrevIndex(current);
          const isNext = index === getNextIndex(current);

          return (
            <div
              key={index}
              className={`slider-item ${isActive ? 'active' : isPrev || isNext ? 'side' : 'inactive'}`}
            >
              <img src={img} alt={`slide-${index}`} />
            </div>
          );
        })}
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
