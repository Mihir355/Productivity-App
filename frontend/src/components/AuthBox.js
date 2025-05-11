import React, { useState } from "react";
import "../styles/AuthBox.css";

const AuthBox = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // handle signup logic here
      console.log("Signing up with:", formData);
    } else {
      // handle login logic here
      console.log("Logging in with:", formData);
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
