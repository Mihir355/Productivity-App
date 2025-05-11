import React from "react";
import "../styles/AuthBox.css";

const AuthBox = () => {
  return (
    <div className="auth-box-container">
      <h2>Login / Signup</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Continue</button>
    </div>
  );
};

export default AuthBox;
