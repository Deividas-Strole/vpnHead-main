// pages/AdminLogin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AdminLoginForm from "../components/AdminLoginForm";
import "../css/AdminLogin.css";

export default function AdminLogin() {
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        try {
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                throw new Error("Login failed. Check your credentials.");
            }

            const data = await res.json();
            localStorage.setItem("token", data.token); // store JWT token
            navigate("/admin/dashboard"); // navigate only after successful login
        } catch (err) {
            console.error(err);
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div>
            <Header />
            <div className="login-heading-text">
                <h1>Only the one with the secret will be allowed in!</h1>
            </div>

            <div className="admin-login-container">
                <AdminLoginForm onLogin={handleLogin} />
            </div>
        </div>
    );
}
