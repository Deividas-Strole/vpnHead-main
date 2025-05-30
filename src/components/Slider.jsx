import React, { useEffect, useState } from "react";
import "../css/Slider.css";
import ArticalSliderBox from "./ArticalSliderBox";

export default function Slider() {
  const [titles, setTitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/api/articles/titles")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data.map(article => article.title));
      })
      .catch((err) => console.error("Failed to fetch article titles", err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % titles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + titles.length) % titles.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [titles]);

  if (titles.length === 0) return <p>Loading articles...</p>;

  const items = titles.map((text, i) => (
    <ArticalSliderBox text={text} key={i} />
  ));
  const extendedItems = [...items, ...items, ...items];
  const slideWidth = 410;
  const translateX = -((currentIndex + items.length) * slideWidth);

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="slider">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(${translateX}px)` }}
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




// import React, { useEffect, useState } from "react";
// import "../css/Slider.css";
// import ArticalSliderBox from "./ArticalSliderBox";

// const texts = [
//   "AAAAA",
//   "BBBB",
//   "CCCC",
//   "DDDD",
//   "EEEEE",
//   // add more here
// ];

// const items = texts.map((text, i) => (
//   <ArticalSliderBox text={text} key={i} />
// ));

// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Create an extended array for smooth infinite scrolling
//   const extendedItems = [...items, ...items, ...items];
//   // Use pixel-based transform calculation
//   const slideWidth = 410; // Width of each slide (400px box + 10px padding)
//   const translateX = -((currentIndex + items.length) * slideWidth);

//   return (
//     <div className="slider-container">
//       <button className="arrow left" onClick={prevSlide}>
//         &#8249;
//       </button>
//       <div className="slider">
//         <div 
//           className="slider-track" 
//           style={{ transform: `translateX(${translateX}px)` }}
//         >
//           {extendedItems.map((item, index) => (
//             <div className="slide" key={index}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="arrow right" onClick={nextSlide}>
//         &#8250;
//       </button>
//     </div>
//   );
// }