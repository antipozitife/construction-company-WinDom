import React, { useEffect, useState, useRef } from "react";
import image1 from "../../img/ImageSlider1.jpg";
import image2 from "../../img/ImageSlider2.jpg";
import image3 from "../../img/ImageSlider3.jpg";
import image4 from "../../img/ImageSlider4.jpg";
import image5 from "../../img/ImageSlider5.jpg";
import "./css/ImageSlider.css";

const images = [image1, image2, image3, image4, image5];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    if (isManualScroll) return;

    const interval = setInterval(() => {
      goToSlide((current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, isManualScroll]);

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
    <div className="sliderWrapper" id="Houses">
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
