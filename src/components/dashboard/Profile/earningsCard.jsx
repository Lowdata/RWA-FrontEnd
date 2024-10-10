/* eslint-disable react/prop-types */
import { Card, Typography, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { claimRewards } from "../../../store/api/payments";
import { useState, useEffect } from "react";

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

  // State to track if claimRewards button has been clicked
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [claimTriggered, setClaimTriggered] = useState(false); // New state to track button click

  const handleClaimRewards = (rwa_id) => {
    // This will only execute when the button is clicked
    dispatch(claimRewards({ rwa_id }));
    setClaimTriggered(true); // Track that the button was clicked
  };

  useEffect(() => {
    if (claimTriggered) {
      if (status === "succeeded") {
        setAlertMessage("Rewards claimed successfully!");
        setShowAlert(true);
        setClaimTriggered(false); // Reset to avoid future triggering
      } else if (status === "failed") {
        const errorMessage =
          typeof error === "string"
            ? error
            : error?.message || "Failed to claim rewards.";
        setAlertMessage(errorMessage);
        setShowAlert(true);
        setClaimTriggered(false); // Reset after showing error
      }
    }
  }, [status, error, claimTriggered]);

  return (
    <Card style={styles.netWorthCard}>
      <Typography variant="h5" style={styles.balance}>
        Total Earnings: ${totalEarnings}
      </Typography>
      <Typography>Referral Earnings: ${referralEarnings}</Typography>
      <Typography>Matrix Earnings: ${matrixEarnings}</Typography>
      <Typography>Revenue Earnings: ${revenueEarnings}</Typography>
      <Typography>Leadership Earnings: ${leadershipEarnings}</Typography>
      <Typography>Daily Earnings: ${dailyEarnings}</Typography>
      <Typography>Direct Royalty Earnings: ${directRoyaltyEarnings}</Typography>

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
        onClick={() => handleClaimRewards(userId)} // Only triggers on click
      >
        Claim Rewards
      </button>
    </Card>
  );
};

export default EarningsCard;
