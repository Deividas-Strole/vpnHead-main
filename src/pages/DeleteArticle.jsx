import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../axiosConfig";
import "../css/AdminDashboard.css";

const DeleteArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get("/api/articles/titles");
      setArticles(response.data);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Failed to load articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(id);
      const response = await api.delete(`/api/articles/${id}`);

      if (response.status === 200) {
        // Remove the article from the list
        setArticles(articles.filter((article) => article.id !== id));
        alert(`Article "${title}" deleted successfully!`);
      }
    } catch (err) {
      console.error("Error deleting article:", err);
      setError(
        `Failed to delete article. ${
          err.response?.data?.message || "Please try again."
        }`
      );
      alert(
        `Failed to delete article. ${
          err.response?.data?.message || "Please try again."
        }`
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="home-container">
      <Header />

      <div className="admin-dashboard-container" style={{ padding: "2rem" }}>
        <h1>Delete Articles</h1>

        {error && (
          <div
            style={{
              backgroundColor: "#f8d7da",
              color: "#721c24",
              padding: "1rem",
              borderRadius: "5px",
              marginBottom: "1rem",
              border: "1px solid #f5c6cb",
            }}
          >
            {error}
          </div>
        )}

        {loading ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            Loading articles...
          </p>
        ) : articles.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            No articles found.
          </p>
        ) : (
          <div
            style={{
              overflowX: "auto",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    ID
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Title
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "center",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr
                    key={article.id}
                    style={{
                      borderBottom: "1px solid #eee",
                      backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                    }}
                  >
                    <td
                      style={{
                        padding: "1rem",
                        color: "#666",
                      }}
                    >
                      {article.id}
                    </td>
                    <td
                      style={{
                        padding: "1rem",
                        color: "#333",
                      }}
                    >
                      {article.title}
                    </td>
                    <td
                      style={{
                        padding: "1rem",
                        textAlign: "center",
                      }}
                    >
                      <button
                        onClick={() => handleDelete(article.id, article.title)}
                        disabled={deletingId === article.id}
                        style={{
                          backgroundColor:
                            deletingId === article.id ? "#ccc" : "#dc3545",
                          color: "white",
                          border: "none",
                          padding: "0.5rem 1rem",
                          borderRadius: "5px",
                          cursor:
                            deletingId === article.id ? "not-allowed" : "pointer",
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          if (deletingId !== article.id) {
                            e.target.style.backgroundColor = "#c82333";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (deletingId !== article.id) {
                            e.target.style.backgroundColor = "#dc3545";
                          }
                        }}
                      >
                        {deletingId === article.id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteArticle;
