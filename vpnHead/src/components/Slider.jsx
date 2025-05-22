import React, { useEffect, useState } from "react";
import "../css/Slider.css";
import ArticalSliderBox from "./ArticalSliderBox";

const texts = [
  "Privacy from Snooping Eyes",
  "Privacy from Snooping rrrr",
  "Privacy from Snooping uuuu",
  // add more here
];

const items = texts.map((text, i) => (
  <ArticalSliderBox text={text} key={i} />
));


export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleItems = [];
  for (let i = 0; i < 3; i++) {
    visibleItems.push(items[(startIndex + i) % items.length]);
  }

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider">
        {visibleItems.map((item, index) => (
          <div className="slide" key={index}>
            {item}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}
