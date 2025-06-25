// EmptyPage.jsx
import React from 'react';
import '../css/AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="centered-container">
            <h1>AdminDashboard</h1>
            <p>AdminDashboard content</p>
            <Link to="/admin/article-editor" className="bg-blue-500 text-white px-4 py-2 rounded">Create New Article</Link>
        </div>
    );
}

export default AdminDashboard;
