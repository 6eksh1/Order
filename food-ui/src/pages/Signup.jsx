import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
    location: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      alert(
        "Password must be 8+ characters and include a number & special character."
      );
      return;
    }

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <section className="auth-section">
        <div className="auth-card">
          <h2>Create Account</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
            />

            {/* ✅ EMAIL ADDED */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />

            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
            />

            <select
              name="gender"
              required
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              onChange={handleChange}
            />

            {/* Password Field */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Set Password"
                required
                onChange={handleChange}
              />
              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;