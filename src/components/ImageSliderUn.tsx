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
            <img src={img} alt={`Построенный дом, фото ${idx + 1}`} loading={idx === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {images.map((_, idx) => (
          <button
            type="button"
            key={idx}
            className={`dot ${idx === current ? "active-dot" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Показать слайд ${idx + 1}`}
            aria-current={idx === current ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
