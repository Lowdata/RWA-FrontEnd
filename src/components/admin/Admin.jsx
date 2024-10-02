import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductPipeline from "./productPipeline";
import "./admin.css";
import { fetchUsers } from "../../store/api/admin";
import ApproveBusinessPartner from "./approval";
import ReferralSection from "./ReferalSection";
import DeleteUserCard from "./deleteUser"; 
import TokenManagement from "./Token";
import LoadingSpinner from "../loading/Loading"

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading, todayJoining, totalJoining } = useSelector(
    (state) => state.admin
  );

  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    if (activeSection === "business") {
      dispatch(fetchUsers());
    }
  }, [activeSection, dispatch]);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("business")}>Business</li>
          <li onClick={() => setActiveSection("product-pipeline")}>
            Product Pipeline
          </li>
          <li onClick={() => setActiveSection("referrals")}>Referral</li>
          <li onClick={() => setActiveSection("tokens")}>Tokens</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === "dashboard" && (
          <div className="dashboard-section">
            <div className="dashboard-item">
              <h2>Today Joining</h2>
              <p>{todayJoining}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Joining</h2>
              <p>{totalJoining}</p>
            </div>
            <div className="dashboard-item">
              <DeleteUserCard />
            </div>
          </div>
        )}
        {activeSection === "business" && (
          <div className="business-section">
            {loading ? (
              <LoadingSpinner />
            ) : users.length === 0 ? (
              <p>No pending business partner approvals.</p>
            ) : (
              <div className="business-card-container">
                {users.map((user) => (
                  <ApproveBusinessPartner key={user.rwa_id} user={user} />
                ))}
              </div>
            )}
          </div>
        )}
        {activeSection === "product-pipeline" && <ProductPipeline />}
        {activeSection === "tokens" && <TokenManagement />}
        {activeSection === "referrals" && <ReferralSection />}
        {activeSection === "delete-user" && <DeleteUserCard />} {/* New card */}
      </div>
    </div>
  );
};

export default AdminDashboard;
