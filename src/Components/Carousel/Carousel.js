import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPreviousSlide}>
        &#8249;
      </button>
      <img className="carousel-image" src={images[currentIndex]} alt="Slide" />
      <button className="carousel-button next" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
