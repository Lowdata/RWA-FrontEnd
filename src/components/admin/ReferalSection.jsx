import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReferralDetails,
  fetchUserEarnings,
} from "../../store/api/admin";
import LoadingSpinner from "../loading/Loading";
import { Alert } from "@mui/material";

const ReferralSection = () => {
  const dispatch = useDispatch();
  const { referralDetails, earningsDetails, loading } = useSelector(
    (state) => state.admin
  );

  const [rwaId, setRwaId] = useState("");

  const handleFetchReferralData = () => {
    if (rwaId.trim() === "") {
      <Alert variant="filled" severity="error">
        Enter a valid ID.
      </Alert>;
      return;
    }

    // Dispatch the actions to fetch referral details and earnings
    dispatch(fetchReferralDetails(rwaId));
    dispatch(fetchUserEarnings(rwaId));
  };

  // Converted CSS into JavaScript objects
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
      backgroundColor: "#fafafa",
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

      {loading ? (
        <LoadingSpinner/>
      ) : (
        <>
          {referralDetails?.referrals?.length ? (
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

          <div style={styles.referralCard}>
            <h3>Earnings and Rank</h3>
            <div style={styles.referralDetails}>
              <h4>Referral Earnings</h4>
              <p>Total Earnings: ${earningsDetails?.totalEarnings || "0.00"}</p>
              <p>Rank: {earningsDetails?.rank || "Unranked"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReferralSection;
