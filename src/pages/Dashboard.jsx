import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Profile from "../components/dashboard/profile";
import ActivityPage from "./Activity";
import BusinessPage from "./BusinessPage";
import RankAndRewardsPage from "../components/dashboard/Rank";
import StakingPage from "../components/dashboard/Staking";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import { Alert, IconButton } from "@mui/material"; // Import Alert and IconButton
import CheckIcon from "@mui/icons-material/Check"; // Import the success icon
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon for dismissing the alert

const styles = {
  dashboardContainer: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    backgroundColor: "#0A0E27",
    "@media (minWidth: 768px)": {
      flexDirection: "row", // Default to row for larger screens
    },
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#1A2238",
    padding: "20px",

    boxShadow: "2px 0 12px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    zIndex: 10,
    transform: "translateX(-100%)", // Hidden initially in mobile
    transition: "transform 0.3s ease-in-out",
  },
  sidebarOpen: {
    transform: "translateX(0)", // Visible when open
  },
  menuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  menuItem: {
    padding: "10px 10px",
    color: "#fff",
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    borderRadius: "8px",
    marginBottom: "12px",
    backgroundColor: "#1A2238",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  menuItemActive: {
    backgroundColor: "#3A506B",
    transform: "translateX(10px)",
  },
  // profile container
  content: {
    flex: 1,
    padding: "40px",
    backgroundColor: "#0A0E27",
    color: "#fff",
    marginLeft: "20px",
    width: "100%",
    "@media (maxWidth: 768px)": {
      display:"flex",
      flexDirection:"row",
      justifyContent:"center" // Smaller padding
    },
  },
  arrow: {
    fontSize: "30px",
    color: "#fff",
    position: "fixed",
    top: "20px",
    left: "15px",
    cursor: "pointer",
    zIndex: 15,
    background: "none", // Ensure there's no background overlap
    border: "none", // Remove default button styling
    transition: "left 0.3s ease-in-out",
    "@media (minWidth: 768px)": {
      display: "none", // Hide the arrow button on larger screens
    },
  },
  alert: {
    marginBottom: "20px", // Add spacing for the alert at the top of the page
  },
};

const Dashboard = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Control the visibility of the alert

  // Fetch the role from localStorage
  const storedAuth = JSON.parse(localStorage.getItem("auth"));
  const userRole = storedAuth?.role || "user"; // Default to "user" if no role is found

  // Show alert only if the user's role is "user"
  useEffect(() => {
    if (userRole === "user") {
      setShowAlert(true);
    }
  }, [userRole]);

  useEffect(() => {
    if (location.state && location.state.currentPage) {
      setCurrentPage(location.state.currentPage);
    }
  }, [location]);

  const renderPageContent = () => {
    switch (currentPage) {
      case "Dashboard":
      case "My Wallet":
        return <Profile />;
      case "Staking":
        return <StakingPage />;
      case "Purchases":
        return <div>You are on &quot;Purchases&quot; page</div>;
      case "Rank and Rewards":
        return <RankAndRewardsPage />;
      case "Business":
        return userRole === "business_partner" ? <BusinessPage /> : null; // Conditional render based on role
      case "Activity":
        return <ActivityPage />;
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <div
        style={{
          ...styles.sidebar,
          ...(sidebarOpen ? styles.sidebarOpen : {}),
        }}
      >
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSidebarOpen={setSidebarOpen}
          userRole={userRole} // Pass the role as a prop to Sidebar
        />
      </div>
      <div style={styles.content}>
        {/* Show Alert only if the role is "user" */}
        {showAlert && (
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setShowAlert(false)} // Close the alert
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            style={styles.alert}
          >
            Upgrade to business partner or sourcing partner to earn more and
            list your business with us.
          </Alert>
        )}

        <button
          style={styles.arrow}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FaArrowLeft /> : <FaArrowRight />}{" "}
          {/* Use arrows instead */}
        </button>
       
          {renderPageContent()}
        </div>
      </div>
   
  );
};

const Sidebar = ({ currentPage, setCurrentPage, setSidebarOpen, userRole }) => {
  const menuItems = ["My Wallet", "Staking", "Rank and Rewards", "Activity"];

  // Conditionally add the "Business" item if the user is a business partner
  if (userRole === "business_partner") {
    menuItems.push("Business");
  }

  return (
    <aside>
      <ul style={styles.menuList}>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => {
              setCurrentPage(item);
              setSidebarOpen(false); // Close sidebar on item click
            }}
            style={{
              ...styles.menuItem,
              ...(currentPage === item ? styles.menuItemActive : {}),
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={styles.footer}>
        <p>© 2024 RWA Dashboard</p>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired, // Add the userRole prop validation
};

export default Dashboard;
