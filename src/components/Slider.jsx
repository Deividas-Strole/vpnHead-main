import React, { useEffect, useState } from "react";
import "../css/Slider.css";
import ArticalSliderBox from "./ArticalSliderBox";
import { useNavigate } from "react-router-dom";

export default function Slider() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/articles/titles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Failed to fetch article titles", err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [articles]);

  if (articles.length === 0) return <p>Loading articles...</p>;

  const handleClick = (id) => {
    navigate(`/article/${id}`);
  };

  const items = articles.map((article) => (
    <div onClick={() => handleClick(article.id)} key={article.id} style={{ cursor: "pointer" }}>
      <ArticalSliderBox text={article.title} />
    </div>
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
