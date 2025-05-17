import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const tabs = ["overview"]; // just one tab now

  const slidingTexts = [
    "Welcome to your productivity app!",
    "Track your tasks and goals easily.",
    "Stay focused and get things done.",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((idx) => (idx + 1) % slidingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboardContainer">
      <h1 className="heading">User Dashboard</h1>

      <nav className="navbar">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={selectedTab === tab ? "tabSelected" : "tab"}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </nav>

      {selectedTab === "overview" && (
        <div className="contentContainer">
          <div className="anotherFeature">
            <h3>Another Feature</h3>
            <p>
              This could be a stats summary, recent activity, or anything else.
            </p>
          </div>

          <div className="todoOverview">
            <h3>To-Do Tasks Overview</h3>
            <ul>
              <li>Task 1: Complete React project</li>
              <li>Task 2: Read documentation</li>
              <li>Task 3: Plan next week goals</li>
            </ul>
          </div>

          <div className="clock">
            <Clock />
          </div>

          <div className="slidingText">{slidingTexts[currentTextIndex]}</div>
        </div>
      )}
    </div>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};

export default Dashboard;
