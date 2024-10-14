import PropTypes from "prop-types";
import "./sidebar.css"
const Sidebar = ({
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const menuItems = [
    { name: "Dashboard", id: "dashboard" },
    { name: "Business", id: "business" },
    { name: "Product Pipeline", id: "product-pipeline" },
    { name: "Referral", id: "referrals" },
    { name: "Tokens", id: "tokens" },
  ];

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              setSidebarOpen(false); // Close sidebar after clicking
            }}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
