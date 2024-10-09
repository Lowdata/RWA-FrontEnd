import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductPipeline from "./productPipeline";
import "./admin.css";
import { fetchBusinessPartners } from "../../store/api/admin";
import ApproveBusinessPartner from "./approval";
import ReferralSection from "./ReferalSection";
import DeleteUserCard from "./deleteUser"; 
import TokenManagement from "./Token";
import LoadingSpinner from "../loading/Loading"
import { fetchAdminStats } from "../../store/api/admin";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { stats,  loading, todayJoining } = useSelector(
    (state) => state.admin
  );
  const [activeSection, setActiveSection] = useState("dashboard");

  const [partners, setPartners] = useState([]); 

  useEffect(() => {
    if (activeSection === "dashboard") {
      const fetchStats = async () => {
        const data = await dispatch(fetchAdminStats());
        return data;
      };
      fetchStats();
    }
  }, [activeSection, dispatch]);
  
  useEffect(() => {
    if (activeSection === "business") {
        const fetchPartner = async()=>{
   const { payload } = await dispatch(fetchBusinessPartners());
   setPartners(payload);       
}
   fetchPartner();
      
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
              <h2>Total Users</h2>
              <p>{stats.totalUsers}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Referral Earnings</h2>
              <p>${stats.totalReferralEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Matrix Earnings</h2>
              <p>${stats.totalMatrixEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Revenue Earnings</h2>
              <p>${stats.totalRevenueEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Leadership Earnings</h2>
              <p>${stats.totalLeadershipEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Daily Earnings</h2>
              <p>${stats.totalDailyEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Direct Royalty Earnings</h2>
              <p>${stats.totalDirectRoyaltyEarnings}</p>
            </div>
            <div className="dashboard-item">
              <h2>Total Earnings</h2>
              <p>${stats.totalEarnings}</p>
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
            ) : partners.length === 0 ? (
              <p>No pending business partner approvals.</p>
            ) : (
              <div className="business-card-container">
                {partners.map((user) => (
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
