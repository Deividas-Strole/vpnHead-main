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

  // Simple regex to detect image URL (Cloudinary or others)
  const isImageUrl = (text) =>
    text.match(/https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)/i);

  return (
    <div className="home-container">
      <Header />

      <div className="heading-text">
        <h1>Reading makes you smarter!</h1>
      </div>

      <div className="what-is-vpn-content">
        <h1 className="headline">{article.title}</h1>

        {paragraphs.map((para, index) =>
          isImageUrl(para) ? (
            <div key={index} style={{ margin: '2rem 0', textAlign: 'center' }}>
              <img
                src={para.trim()}
                alt="article"
                style={{ maxWidth: '100%', borderRadius: '10px' }}
              />
            </div>
          ) : (
            <p
              key={index}
              style={{ marginBottom: '1.5rem', textAlign: 'justify', lineHeight: '1.7' }}
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



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";
// import "../css/Home.css";
// import Slider from "../components/Slider";

// const Article = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/articles/${id}`)
//       .then((res) => res.json())
//       .then((data) => setArticle(data))
//       .catch((err) => console.error("Error fetching article:", err));
//   }, [id]);

//   // ⬇️ Add this to scroll to top when the article ID changes
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!article) return <p>Loading...</p>;

//   const paragraphs = article.content.split('\n\n').filter(p => p.trim() !== '');

//   return (
//     <div className="home-container">
//       <Header />

//       <div className="heading-text">
//         <h1>Reading makes you smarter!</h1>
//       </div>

//       <div className="what-is-vpn-content">
//         <h1 className="headline">{article.title}</h1>
//         {paragraphs.map((paragraph, index) => (
//           <p key={index} style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
//             {paragraph.trim()}
//           </p>
//         ))}
//       </div>

//       <div className="articles-content">
//         <h1 className="headline">Articles</h1>
//         <Slider />
//       </div>
//     </div>
//   );
// };

// export default Article;
