// pages/AdminLogin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AdminLoginForm from "../components/AdminLoginForm";
import "../css/AdminLogin.css";

export default function AdminLogin() {
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        const credentials = btoa(`${username}:${password}`);

        const res = await fetch("http://localhost:8080/admin", {
            method: "GET",
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });

        if (res.ok) {
            localStorage.setItem("auth", `Basic ${credentials}`);
            navigate("/admin/dashboard");
        } else {
            throw new Error("Login failed. Check your credentials.");
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
