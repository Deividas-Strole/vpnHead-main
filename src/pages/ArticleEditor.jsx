// src/components/ArticleEditor.jsx

import React, { useState } from "react";
import axios from "axios";
import api from "../axiosConfig";
import "../css/ArticleEditor.css"; // Import the CSS file

const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dxubasgtx/image/upload";
const UPLOAD_PRESET = "VpnHead";

const isImageUrl = (text) => {
  const trimmed = text.trim();
  return trimmed.match(/^https?:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]*)*\.(?:png|jpg|jpeg|gif|webp)$/i);
};

const ArticleEditor = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [selectedParaIndex, setSelectedParaIndex] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  const handleSplitText = (val) => {
    const paras = val.split("\n\n");
    setParagraphs(paras);
    setText(val);
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    const res = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
    return res.data.secure_url;
  };

  const handleContentImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || selectedParaIndex === null) return;

    try {
      const imageUrl = await uploadToCloudinary(file);
      const newParas = [...paragraphs];
      newParas.splice(selectedParaIndex + 1, 0, imageUrl);
      const newText = newParas.join("\n\n");
      setText(newText);
      setParagraphs(newParas);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleFeaturedImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const url = await uploadToCloudinary(file);
      setFeaturedImage(url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const handleSubmit = async () => {
    if (!title || !text) {
      alert("Title and content are required.");
      return;
    }

    try {
      await api.post("/api/articles", {
        title,
        content: text,
        imageUrl: featuredImage,
      });
      alert("Article submitted!");
      setTitle("");
      setText("");
      setFeaturedImage(null);
      setParagraphs([]);
      setSelectedParaIndex(null);
    } catch (err) {
      console.error(err);
      alert("Failed to submit article.");
    }
  };

  return (
    <div className="editor-container">
      <h1 className="editor-heading">Create New Article</h1>

      <input
        type="text"
        className="editor-input"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label className="editor-label">Upload Featured Image:</label>
      <input type="file" onChange={handleFeaturedImageUpload} className="editor-file-input" />
      {featuredImage && (
        <img src={featuredImage} alt="Featured" className="editor-image" />
      )}

      <textarea
        className="editor-textarea"
        placeholder="Write article content here..."
        value={text}
        onChange={(e) => handleSplitText(e.target.value)}
      />

      <div className="editor-paragraphs">
        <label className="editor-label">
          Click a paragraph below to insert image after it:
        </label>
        {paragraphs.map((para, idx) => (
          <div
            key={idx}
            className={`editor-paragraph ${selectedParaIndex === idx ? "selected" : ""}`}
            onClick={() => setSelectedParaIndex(idx)}
          >
            {isImageUrl(para) ? (
              <img src={para.trim()} alt="Inserted" className="editor-inserted-image" />
            ) : (
              <p>{para}</p>
            )}
          </div>
        ))}
      </div>

      <input type="file" onChange={handleContentImageUpload} className="editor-file-input" />

      <button className="editor-button" onClick={handleSubmit}>
        Submit Article
      </button>
    </div>
  );
};

export default ArticleEditor;
