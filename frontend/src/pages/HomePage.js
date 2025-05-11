import React from "react";
import IntroText from "../components/IntroText";
import AuthBox from "../components/AuthBox";
import RightPanel from "../components/RightPanel";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="left-panel">
        <IntroText />
        <AuthBox />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </div>
  );
};

export default HomePage;
