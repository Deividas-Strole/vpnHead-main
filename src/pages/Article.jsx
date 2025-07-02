import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../css/Home.css";
import Slider from "../components/Slider";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // For production, use the relative path without port
    fetch(`http://localhost:8080/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.error("Error fetching article:", err));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) return <p>Loading...</p>;

  const paragraphs = article.content.split('\n\n').filter(p => p.trim() !== '');

  // More robust URL detection that handles Cloudinary URLs
  const isImageUrl = (text) => {
    // Remove any surrounding whitespace or newlines
    const trimmed = text.trim();
    // Check if it's a valid URL that starts with http or https and ends with an image extension
    return trimmed.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]*)*\.(?:png|jpg|jpeg|gif|webp)$/i);
  };

  return (
    <div className="home-container">
      <Header />

      <div className="heading-text">
        <h1>Reading makes you smarter!</h1>
      </div>

      <div className="what-is-vpn-content">
        <style jsx>{`
          .featured-image-container {
            margin: 2rem 0;
            text-align: center;
          }
          .featured-image {
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .content-image {
            width: 400px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
          }
        `}</style>
        <h1 className="headline">{article.title}</h1>
        {article.imageUrl && (
          <div className="featured-image-container">
            <img
              src={`${article.imageUrl}?w=600&h=300&c=scale`}
              alt="Featured"
              className="featured-image"
            />
          </div>
        )}

        {paragraphs.map((para, index) =>
          isImageUrl(para) ? (
            <div key={index} className="content-image-container">
              <img
                src={para.trim()}
                alt="article"
                className="content-image"
              />
            </div>
          ) : (
            <p
              key={index}
              className="featured-image"
            >
              {para.trim()}
            </p>
          )
        )}
      </div>

      <div className="articles-content">
        <h1 className="headline">Articles</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Article;
//         <h1 className="headline">Articles</h1>
//         <Slider />
//       </div>
//     </div>
//   );
// };

// export default Article;
