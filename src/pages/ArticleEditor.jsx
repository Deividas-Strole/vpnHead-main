import React, { useState } from "react";
import axios from "axios";

const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dxubasgtx/image/upload";
const UPLOAD_PRESET = "VpnHead";

const ArticleEditor = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [paragraphs, setParagraphs] = useState([]);
    const [selectedParaIndex, setSelectedParaIndex] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);

    const handleSplitText = (val) => {
        const paras = val.split("\n\n");
        setParagraphs(paras);
        setText(val); // sync original text
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
            newParas.splice(selectedParaIndex + 1, 0, `/n/n ${imageUrl} /n/n`);
            // newParas.splice(selectedParaIndex + 1, 0, `[image:${imageUrl}]`);
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
            await axios.post("http://localhost:8080/admin/save-article", {
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
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Create New Article</h2>

            <input
                type="text"
                className="w-full border p-2 mb-4"
                placeholder="Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label className="block mb-2 font-semibold">Upload Featured Image:</label>
            <input type="file" onChange={handleFeaturedImageUpload} className="mb-4" />
            {featuredImage && (
                <img src={featuredImage} alt="Featured" className="max-w-xs mb-4 rounded" />
            )}

            <textarea
                className="w-full h-48 border p-2 mb-4"
                placeholder="Write article content here..."
                value={text}
                onChange={(e) => handleSplitText(e.target.value)}
            />

            <div className="mb-4">
                <label className="block font-semibold mb-2">
                    Click a paragraph below to insert image after it:
                </label>
                {paragraphs.map((para, idx) => (
                    <div
                        key={idx}
                        className={`p-2 border mb-2 rounded cursor-pointer ${selectedParaIndex === idx ? "bg-blue-100" : ""
                            }`}
                        onClick={() => setSelectedParaIndex(idx)}
                    >
                        {para.startsWith("[image:") ? (
                            <img
                                src={para.replace("[image:", "").replace("]", "")}
                                alt="Inserted"
                                className="max-w-full h-auto rounded"
                            />
                        ) : (
                            <p>{para}</p>
                        )}
                    </div>
                ))}
            </div>

            <input type="file" onChange={handleContentImageUpload} className="mb-4" />

            <button
                className="bg-blue-600 text-white px-6 py-2 rounded"
                onClick={handleSubmit}
            >
                Submit Article
            </button>
        </div>
    );
};

export default ArticleEditor;
