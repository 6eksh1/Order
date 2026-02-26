import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login Successful!");
      navigate("/profile"); // ✅ Redirect to Profile
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <Navbar />

      <section className="auth-section">
        <div className="auth-card">
          <h2>Login</h2>

          <form className="auth-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;