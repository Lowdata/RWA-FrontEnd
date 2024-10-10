/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tokenPayment } from "../../store/api/payments";
import { resetPaymentState } from "../../store/paymentSlice"; // Import reset action to clear status

const PackageCard = ({ price, stars }) => {
  const dispatch = useDispatch();
  const { userId, publicKey } = useSelector((state) => state.auth); // Extract user details

  const paymentStatus = useSelector((state) => state.payment.status); // Payment status from Redux store
  const paymentError = useSelector((state) => state.payment.error); // Payment error from Redux store

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedToken, setSelectedToken] = useState("bnb"); // Default currency option
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState(null); // success or error alert
  const [alertMessage, setAlertMessage] = useState(""); // Alert message content

  // Ensure stars are between 0 and 7
  const validStars = Math.min(Math.max(stars, 0), 7);

  const handleBuyClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirmPayment = () => {
    // Prepare the payload for the tokenPayment action
    const payload = {
      stakeAmount: price,
      tokenType: selectedToken, // Token type selected from the dropdown (bnb/usdt)
      rwa_id: userId, // Use the userId from Redux state
      userAddress: publicKey, // Use the publicKey from Redux state
      stakeDuration: selectedYear, // Years from the year selector
    };

    // Dispatch the tokenPayment action with the payload
    dispatch(tokenPayment(payload));

    // Close dialog after confirming payment
    setIsDialogOpen(false);
  };

  // UseEffect to track payment status changes and show alerts
  useEffect(() => {
    if (paymentStatus === "loading") {
      setAlertType("processing");
      setAlertMessage("Processing your payment...");
      setAlertOpen(true);
    } else if (paymentStatus === "succeeded") {
      setAlertType("success");
      setAlertMessage("Payment successful!");
      setAlertOpen(true);
    } else if (paymentStatus === "failed") {
      setAlertType("error");
      setAlertMessage(`Payment failed`);
      setAlertOpen(true);
    }

    // Reset the payment state after 3 seconds
    const timer = setTimeout(() => {
      setAlertOpen(false);
      dispatch(resetPaymentState()); // Clear payment state after showing alert
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount or re-render
  }, [paymentStatus, paymentError, dispatch]);

  return (
    <div style={styles.card}>
      <div style={styles.price}>${price}</div>
      <div style={styles.stars}>
        {"★".repeat(validStars)}
        {"☆".repeat(7 - validStars)}
      </div>

      {/* Buy Button */}
      <button style={styles.buyButton} onClick={handleBuyClick}>
        Buy
      </button>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div style={styles.dialogOverlay}>
          <div style={styles.dialog}>
            <h3 style={styles.dialogTitle}>Purchase Package</h3>

            {/* Info Section */}
            <div style={styles.infoSection}>
              <p>
                <strong>Package Info:</strong> This package will upgrade your
                account with {validStars} stars.
              </p>
            </div>

            {/* Amount Section (Read-Only) */}
            <div style={styles.dialogRow}>
              <label htmlFor="amount" style={styles.label}>
                Package Amount:
              </label>
              <input
                type="number"
                id="amount"
                value={price}
                readOnly
                style={styles.input}
              />
            </div>

            {/* Year Selector */}
            <div style={styles.dialogRow}>
              <label htmlFor="years" style={styles.label}>
                Select Staking Duration:
              </label>
              <select
                id="years"
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                style={styles.input}
              >
                <option value={1}>1 Year</option>
                <option value={2}>2 Years</option>
                <option value={3}>3 Years</option>
                <option value={4}>4 Years</option>
              </select>
            </div>

            {/* Token Type Selector */}
            <div style={styles.dialogRow}>
              <label htmlFor="tokenType" style={styles.label}>
                Select Payment Currency:
              </label>
              <select
                id="tokenType"
                value={selectedToken}
                onChange={(e) => setSelectedToken(e.target.value)}
                style={styles.input}
              >
                <option value="bnb">BNB</option>
                <option value="usdt">USDT</option>
              </select>
            </div>

            {/* Confirm Button */}
            <button style={styles.confirmButton} onClick={handleConfirmPayment}>
              Confirm Payment
            </button>

            {/* Close Dialog */}
            <button
              style={styles.closeButton}
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Alert Box */}
      {alertOpen && (
        <div style={styles.alertBox(alertType)}>
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#2e2e3e",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "150px",
    position: "relative", // Ensure the card stays in place
  },
  price: {
    fontSize: "20px",
    color: "#fff",
    marginBottom: "10px",
  },
  stars: {
    fontSize: "16px",
    color: "#ffd700", // Gold color for stars
  },
  buyButton: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dialogOverlay: {
    position: "fixed", // Fix the overlay to cover the screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the overlay background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // High z-index to ensure it's above other elements
  },
  dialog: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "350px",
    textAlign: "center",
    zIndex: 1001, // Ensure dialog itself is also above other elements
  },
  dialogTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  dialogRow: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  infoSection: {
    backgroundColor: "#2e2e3e",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    textAlign: "left",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
    fontWeight: "bold",
  },
  closeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  alertBox: (type) => ({
    position: "fixed",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor:
      type === "success" ? "#4CAF50" : type === "error" ? "#f44336" : "#FFA500", // Orange for "processing"
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 1002,
    fontWeight: "bold",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  }),
};

export default PackageCard;
