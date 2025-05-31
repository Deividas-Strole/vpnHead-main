import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../css/Home.css";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="home-container">
      <Header />

      <div className="heading-text">
        <h1>Reading makes me smarter.</h1>
      </div>

      <div className="what-is-vpn-content">
        <h1 className="headline">{article.title}</h1>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default Article;
