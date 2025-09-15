import React, { useEffect, useState } from "react";
import "./css/ImageSlider.css";

type Props = {
  images: string[];
};

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    if (isManualScroll) return;

    const interval = setInterval(() => {
      goToSlide((current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, isManualScroll, images.length]);

  const goToSlide = (index: number) => {
    setIsManualScroll(true);
    setCurrent(index);
    setTimeout(() => setIsManualScroll(false), 1000);
  };

  const getSlidePosition = (index: number) => {
    const prev = (current - 1 + images.length) % images.length;
    const next = (current + 1) % images.length;

    if (index === current) return "active";
    if (index === prev) return "prev";
    if (index === next) return "next";
    return "hidden";
  };

  return (
    <div className="sliderWrapper">
      <div className="carousel">
        {images.map((img, idx) => (
          <div key={idx} className={`slide ${getSlidePosition(idx)}`}>
            <img src={img} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active-dot" : ""}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
