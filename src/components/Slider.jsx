import React, { useEffect, useState } from "react";
import "../css/Slider.css";
import ArticalSliderBox from "./ArticalSliderBox";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Slider() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // for prod: fetch("/api/articles/titles")
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
    const interval = setInterval(nextSlide, 3000); // Slower transition
    return () => clearInterval(interval);
  }, [articles]);

  if (articles.length === 0) return <p>Loading articles...</p>;

  // Wrap each item with its id
  const items = articles.map((article) => ({
    id: article.id,
    element: <ArticalSliderBox text={article.title} />,
  }));

  // Repeat items for smooth looping
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
            <Link
              to={`/article/${item.id}`}
              key={index}
              className="slide"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              {item.element}
            </Link>

          ))}
        </div>
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}
