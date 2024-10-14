import { Card, Typography, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { claimRewards } from "../../../store/api/payments";
import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const EarningsCard = ({
  totalEarnings,
  referralEarnings,
  matrixEarnings,
  revenueEarnings,
  leadershipEarnings,
  dailyEarnings,
  directRoyaltyEarnings,
  styles,
}) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { error, status } = useSelector((state) => state.payment);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [claimTriggered, setClaimTriggered] = useState(false); // Track button click

  const handleClaimRewards = (rwa_id) => {
    dispatch(claimRewards({ rwa_id }));
    setClaimTriggered(true);
  };

  useEffect(() => {
    if (claimTriggered) {
      if (status === "succeeded") {
        setAlertMessage("Rewards claimed successfully!");
        setShowAlert(true);
        setClaimTriggered(false);
      } else if (status === "failed") {
        const errorMessage =
          typeof error === "string"
            ? error
            : error?.message || "Failed to claim rewards.";
        setAlertMessage(errorMessage);
        setShowAlert(true);
        setClaimTriggered(false);
      }
    }
  }, [status, error, claimTriggered]);

  return (
    <Card style={styles.netWorthCard}>
      <Typography variant="h5" style={styles.balance}>
        Total Earnings: ${totalEarnings}
      </Typography>
      <Typography style={{ ...styles.typography, fontWeight: "bold" }}>
        Referral Earnings: ${referralEarnings}
      </Typography>
      <Typography style={styles.typography}>
        Matrix Earnings: ${matrixEarnings}
      </Typography>
      <Typography style={styles.typography}>
        Revenue Earnings: ${revenueEarnings}
      </Typography>
      <Typography style={styles.typography}>
        Leadership Earnings: ${leadershipEarnings}
      </Typography>
      <Typography style={styles.typography}>
        Daily Earnings: ${dailyEarnings}
      </Typography>
      <Typography style={styles.typography}>
        Direct Royalty Earnings: ${directRoyaltyEarnings}
      </Typography>

      {showAlert && (
        <Alert
          severity={status === "succeeded" ? "success" : "error"}
          onClose={() => setShowAlert(false)}
          style={{ marginTop: "20px" }}
        >
          {alertMessage}
        </Alert>
      )}

      <button
        style={{
          marginTop: "40px",
          backgroundColor: "#CBA135",
          color: "#1C1C1E",
          boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)",
          "&:hover": {
            backgroundColor: "#CBA135",
            boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)",
          },
          "@media (maxWidth: 768px)": {
            backgroundColor: "#CBA135",
          },
        }}
        onClick={() => handleClaimRewards(userId)}
      >
        Claim Rewards
      </button>
    </Card>
  );
};

// Define PropTypes for the component
EarningsCard.propTypes = {
  totalEarnings: PropTypes.string.isRequired,
  referralEarnings: PropTypes.string.isRequired,
  matrixEarnings: PropTypes.string.isRequired,
  revenueEarnings: PropTypes.string.isRequired,
  leadershipEarnings: PropTypes.string.isRequired,
  dailyEarnings: PropTypes.string.isRequired,
  directRoyaltyEarnings: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    netWorthCard: PropTypes.object,
    balance: PropTypes.object,
    typography: PropTypes.object,
  }).isRequired,
};

export default EarningsCard;
