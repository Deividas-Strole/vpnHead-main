// EmptyPage.jsx
import React from 'react';
import '../css/AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="centered-container">
            <h1>AdminDashboard</h1>
            <Link to="/admin/article-editor" className="create-article-link">Create New Article</Link>
            <Link to="/" className="create-article-link">Go Back To Home Page</Link>
        </div>
    );
}
// Export the component

export default AdminDashboard;
