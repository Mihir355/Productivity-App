import React from "react";
import "../styles/RightPanel.css";
import logo from "../assets/logo.svg";

const RightPanel = () => {
  return (
    <div className="right-panel-container">
      <img src={logo} alt="Logo" className="right-logo" />
      <h1 className="company-name">AtoD</h1>
      <p className="company-quote">TRANSFORM</p>
    </div>
  );
};

export default RightPanel;
