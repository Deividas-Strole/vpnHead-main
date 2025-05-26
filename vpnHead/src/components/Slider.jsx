import React, { useEffect, useState } from "react";
import "../css/Slider.css";
import ArticalSliderBox from "./ArticalSliderBox";

const texts = [
  "AAAAA",
  "BBBB",
  "CCCC",
  "DDDD",
  "EEEEE",
  // add more here
];

const items = texts.map((text, i) => (
  <ArticalSliderBox text={text} key={i} />
));

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create an extended array for smooth infinite scrolling
  const extendedItems = [...items, ...items, ...items];
  const translateX = -((currentIndex + items.length) * (100 / 3));

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {extendedItems.map((item, index) => (
            <div className="slide" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}