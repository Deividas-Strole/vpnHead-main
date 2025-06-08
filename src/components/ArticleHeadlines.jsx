import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css"; // Make sure styles are included

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
        <div className="red-box-row">
            {articles.map((article) => (
                <Link
                    to={`/article/${article.id}`}
                    key={article.id}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    <div className="red-box">
                        <p>{article.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
