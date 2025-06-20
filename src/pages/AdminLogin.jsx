import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../css/AdminLogin.css';


function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const credentials = btoa(`${username}:${password}`);
        try {
            const res = await fetch("http://localhost:8080/admin", {
                method: "GET", // any protected request
                headers: {
                    "Authorization": `Basic ${credentials}`,
                },
            });

            if (res.ok) {
                // Save credentials in localStorage or context (careful with security!)
                localStorage.setItem("auth", `Basic ${credentials}`);
                navigate("/admin/dashboard");
            } else {
                setError("Login failed. Check your credentials.");
            }
        } catch (err) {
            setError("Error during login. Please try again.");
        }
    };

    return (
        <div>
            <Header />

            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default AdminLogin;
