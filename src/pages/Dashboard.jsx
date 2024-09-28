import React, { useState, useEffect } from "react";
import "../styles/dashboard.css";
import Profile from "../components/dashboard/profile";
import ActivityPage from "./Activity";
import BusinessPage from "./BusinessPage";
import RankAndRewardsPage from "../components/dashboard/Rank";
import StakingPage from "../components/dashboard/Staking";
import { useLocation } from "react-router-dom";
import TokenPage from "../components/dashboard/Tokens";

const Dashboard = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Dashboard");

  // Check if `state` is passed via `location` and set the current page
  useEffect(() => {
    if (location.state && location.state.currentPage) {
      setCurrentPage(location.state.currentPage);
    }
  }, [location]);

  const renderPageContent = () => {
    switch (currentPage) {
      case "Dashboard":
      case "My Wallet":
        return (
          <div>
            <Profile />
          </div>
        );
      case "Staking":
        return (
          <div>
            <StakingPage />
          </div>
        );
      case "Purchases":
        return <div>You are on "Purchases" page</div>;
      case "Tokens":
        return <div>
            <TokenPage/>
        </div>;
      case "Rank and Rewards":
        return (
          <div>
            <RankAndRewardsPage />
          </div>
        );
      case "Business":
        return (
          <div>
            <BusinessPage />
          </div>
        );
      case "Activity":
        return (
          <div>
            <ActivityPage />
          </div>
        );
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="dashboard-content">{renderPageContent()}</div>
    </div>
  );
};

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    "My Wallet",
    "Staking",
    "Tokens",
    "Rank and Rewards",
    "Business",
    "Activity",
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setCurrentPage(item)}
            className={currentPage === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <p>© 2024 RWA Dashboard</p>
      </div>
    </aside>
  );
};

export default Dashboard;
