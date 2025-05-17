import React, { useState } from "react";
import axios from "axios";
import "../styles/AuthBox.css";

const AuthBox = ({ onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const BASE_URL = "http://localhost:5000";

      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        const res = await axios.post(`${BASE_URL}/api/auth/signup`, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          onLoginSuccess();
        }
      } else {
        const res = await axios.post(`${BASE_URL}/api/auth/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          onLoginSuccess();
        }
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="auth-box-container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {isSignup && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p className="auth-toggle-text">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={toggleMode}>
          {isSignup ? "Login here" : "Sign up here"}
        </span>
      </p>
    </div>
  );
};

export default AuthBox;
