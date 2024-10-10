import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReferralDetails, fetchUserEarnings } from "../../store/api/admin";
import LoadingSpinner from "../loading/Loading";


const ReferralSection = () => {
  const dispatch = useDispatch();
  const [rwaId, setRwaId] = useState("");

  // Fetch state from Redux
  const { referralDetails, earningsDetails, loading } = useSelector(
    (state) => state.admin
  );
  const { userId, referrals, referralsLoading, referralsError } = useSelector(
    (state) => state.auth
  );

  const userReferralSummary = referrals?.summary || {
    totalEarnings: "$0.00",
    rank: "No rank",
  };

  // Fetch referrals when the component mounts
  

  const handleFetchReferralData = () => {
    if (rwaId.trim() === "") {
      alert("Enter a valid ID");
      return;
    }
    dispatch(fetchReferralDetails(rwaId));
    dispatch(fetchUserEarnings(rwaId));
  };

  // Inline styles (converted from CSS)
  const styles = {
    referralSection: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      margin: "0 auto",
    },
    referralInput: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      padding: "8px",
      flex: 1,
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      padding: "8px 16px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    referralCard: {
      padding: "16px",
      backgroundColor: "#E0E0E0",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
    },
    referralDetails: {
      marginTop: "16px",
      fontWeight: "bold",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      padding: "4px 0",
    },
  };

  return (
    <div style={styles.referralSection}>
      <h2>Referral Details</h2>
      <div style={styles.referralInput}>
        <input
          type="text"
          value={rwaId}
          onChange={(e) => setRwaId(e.target.value)}
          placeholder="Enter RWA ID"
          style={styles.input}
        />
        <button onClick={handleFetchReferralData} style={styles.button}>
          Fetch Referral
        </button>
      </div>

      {referralsLoading && <p>Loading referral data...</p>}
      {referralsError && <p>Error loading referrals: {referralsError}</p>}

      {/* Summary Card */}
      <div className="user-referral-card">
        <h2>Your Referral Summary</h2>
        <p>Total Earnings: {userReferralSummary.totalEarnings}</p>
        <p>Rank: {userReferralSummary.rank}</p>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {referralDetails?.referrals?.length > 0 ? (
            <div style={styles.referralCard}>
              <h3>Referral Data for {rwaId}</h3>
              <div style={styles.referralDetails}>
                <h4>Referral Partners:</h4>
                <ul style={styles.list}>
                  {referralDetails.referrals.map((referral) => (
                    <li key={referral.id} style={styles.listItem}>
                      {referral.ReferredUser.userName} (
                      {referral.ReferredUser.email}) - Level {referral.level}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p>No referral data available.</p>
          )}
        </>
      )}

      {/* Referral Table */}
      <p>Your referrals</p>
      {!referralsLoading && referrals?.referrals?.length > 0 && (
        <table className="referrals-table">
          <thead>
            <tr>
              <th>Referral ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Level</th>
              <th>Total Earnings</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {referrals.referrals.map((referral) => (
              <tr key={referral.id}>
                <td>{referral.referredUserRwaId}</td>
                <td>{referral.ReferredUser.userName}</td>
                <td>{referral.ReferredUser.email}</td>
                <td>{referral.level}</td>
                <td>{referral.totalEarnings || "$0.00"}</td>
                <td>{referral.rank || "No rank"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!referralsLoading && referrals?.referrals?.length === 0 && (
        <p>No referrals found for this user.</p>
      )}
    </div>
  );
};

export default ReferralSection;
