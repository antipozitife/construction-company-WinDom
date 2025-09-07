import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image1 from "../../img/ImageSlider1.svg";
import image2 from "../../img/ImageSlider2.svg";
import image3 from "../../img/ImageSlider3.svg";
import image4 from "../../img/ImageSlider4.svg";
import image5 from "../../img/ImageSlider5.svg";
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
