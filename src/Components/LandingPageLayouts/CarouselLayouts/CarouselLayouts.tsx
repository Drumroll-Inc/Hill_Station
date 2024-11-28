import React, { useState } from "react";
import Styles from "./CarouselLayouts.module.css";


const images = [
  "/public/Images1.svg",
  "/public/Images2.svg",
  "/public/Images3.svg",
  "/public/Images4.svg",
  "/public/Images5.svg",
];

export const CarouselLayouts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getPositionClass = (index: number) => {
    const total = images.length;
    const offset = (index - currentIndex + total) % total;

    if (offset === 0) return Styles.Active;
    if (offset === 1) return Styles.Right;
    if (offset === 2) return Styles.FarRight;
    if (offset === total - 1) return Styles.Left;
    if (offset === total - 2) return Styles.FarLeft;
    return "";
  };

  return (
    <div className={Styles.CarouselLayoutsContainer}>
      <div className={Styles.CarouselLayoutsContainerList1}>
        <h1 className={Styles.CarouselLayoutH1}>Simple Image Carousel</h1>
        <p className={Styles.CarouselLayoutParagh}>Interactive Components & Variants</p>
      </div>
      <div className={Styles.CarouselLayoutsSlideImages}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${Styles.CarouselImage} ${getPositionClass(index)}`}
          />
        ))}
      </div>
      <div className={Styles.CarouselNavigation}>
        <button className={Styles.PrevButton} onClick={handlePrev}>&#8592;</button>
        <div className={Styles.DotsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${Styles.Dot} ${index === currentIndex ? Styles.ActiveDot : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className={Styles.NextButton} onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};


export default CarouselLayouts;