import React from "react";
import { useNavigate } from "react-router-dom";
import IntroText from "../components/IntroText";
import AuthBox from "../components/AuthBox";
import RightPanel from "../components/RightPanel";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-page-container">
      <div className="left-panel">
        <IntroText />
        <AuthBox onLoginSuccess={handleLoginSuccess} />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
};

export default HomePage;
