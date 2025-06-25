import React, { useState } from "react";
import axios from "axios";

const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload";
const UPLOAD_PRESET = "YOUR_UNSIGNED_PRESET";

const ArticleEditor = () => {
    const [text, setText] = useState("");
    const [paragraphs, setParagraphs] = useState([]);
    const [selectedParaIndex, setSelectedParaIndex] = useState(null);

    const handleSplitText = (val) => {
        const paras = val.split("\n\n");
        setParagraphs(paras);
        setText(val); // keep in sync
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file || selectedParaIndex === null) return;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        try {
            const res = await axios.post(CLOUDINARY_UPLOAD_URL, formData);
            const url = res.data.secure_url;

            const newParas = [...paragraphs];
            newParas.splice(selectedParaIndex + 1, 0, `[image:${url}]`);
            const newText = newParas.join("\n\n");
            setText(newText);
            setParagraphs(newParas);
        } catch (err) {
            console.error("Upload failed", err);
        }
    };

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:8080/api/articles", {
                content: text,
            });
            alert("Article submitted!");
        } catch (err) {
            console.error(err);
            alert("Failed to submit.");
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Write Article</h2>

            {paragraphs.map((para, idx) => (
                <div key={idx} className="mb-4">
                    <p className="border p-2" onClick={() => setSelectedParaIndex(idx)}>
                        {para.startsWith("[image:") ? (
                            <img
                                src={para.replace("[image:", "").replace("]", "")}
                                alt="Inserted"
                                className="max-w-full h-auto rounded"
                            />
                        ) : (
                            para
                        )}
                    </p>
                </div>
            ))}

            <textarea
                className="w-full h-40 p-2 border"
                value={text}
                onChange={(e) => handleSplitText(e.target.value)}
                placeholder="Write your article here..."
            />

            <div className="my-4">
                <label className="block mb-2">Insert image after selected paragraph:</label>
                <input type="file" onChange={handleImageUpload} />
            </div>

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
            >
                Submit Article
            </button>
        </div>
    );
};

export default ArticleEditor;