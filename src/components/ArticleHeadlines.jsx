import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/articleheadlines.css"; // Updated CSS path
import shieldIcon from '../assets/vpnWorld.png';


export default function ArticleHeadlines() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/articles/titles")
            .then((res) => res.json())
            .then((data) => setArticles(data))
            .catch((err) => console.error("Failed to fetch article titles", err));
    }, []);

    if (articles.length === 0) return <p>Loading articles...</p>;

    return (
        <div className="article-headlines-container">
            {articles.map((article) => (
                <Link
                    to={`/article/${article.id}`}
                    key={article.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div className="article-box">
                        <img src={shieldIcon} alt="Shield" className="article-box-image" />
                        <p className="article-box-title">{article.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
