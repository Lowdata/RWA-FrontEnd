import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApprovedProducts } from "./Marketplace";
import { LinearProgress } from "@mui/material";
import {  resetPaymentState } from "../store/paymentSlice";

import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/loading/Loading";
export const stake = [];

const NFTDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nft, setNft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [units, setUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(50);
  const [maxUnits, setMaxUnits] = useState(0);
  const [raisedFunds, setRaisedFunds] = useState(0);
  const [lockTime, setLockTime] = useState(1); // Initialize lockTime state
  const dispatch = useDispatch();
  const status = useSelector((state) => state.payment.status);
  const error = useSelector((state) => state.payment.error);

  useEffect(() => {
    const fetchNFTDetails = async () => {
      try {
        const products = await getApprovedProducts();
        const product = products.find((p) => p.id.toString() === id);
        if (product) {
          setNft(product);
          setMaxUnits(Math.floor(product.amount / 50));
          setRaisedFunds(product.raised || 0);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch NFT details", error);
      }
    };

    fetchNFTDetails();
  }, [id]);

  const handleBack = () => {
    navigate("/marketplace");
  };

  const handleBuy = () => {
    setShowModal(true);
  };

  const handleUnitsChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = parseInt(inputValue, 10);
    const validatedValue = !isNaN(numericValue)
      ? Math.min(Math.max(0, numericValue), maxUnits)
      : 0;
    setUnits(validatedValue);
    setTotalPrice(validatedValue * 50);
  };

  const getProgressPercentage = () => {
    if (raisedFunds && nft.amount > 0) {
      let percentage = (raisedFunds / nft.amount) * 100;
      if (percentage > 0 && percentage < 1) {
        percentage = Math.log10(raisedFunds / 90) * 10;
      }
      return Math.min(Math.max(percentage, 1), 100);
    }
    return 0;
  };

  const getModalProgressPercentage = () => {
    if (maxUnits > 0) {
      let percentage = (units / maxUnits) * 100;
      if (percentage > 0 && percentage < 1) {
        percentage = Math.log10(units / 90) * 10;
      }
      return Math.min(Math.max(percentage, 1), 100);
    }
    return 0;
  };

  const handleConfirmPayment = () => {
    const purchaseDetails = {
      id: nft.id,
      image: nft.image,
      name: nft.name,
      units,
      lockTime,
      purchaseDate: new Date().toISOString(),
    };
    const newRaisedAmount = raisedFunds + totalPrice;
    setRaisedFunds(newRaisedAmount);

    stake.push(purchaseDetails);

    setShowModal(false);
  };

  const handleLockTimeChange = (e) => {
    setLockTime(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    if (status === "succeeded") {
      alert("Payment completed successfully.");
      dispatch(resetPaymentState());
    }
    if (status === "failed" && error) {
      alert(`Payment failed: ${error}`);
    }
  }, [status, error, dispatch]);

  const styles = {
    page: {
      width: "100%",
      minHeight: "100vh",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(145deg, #1a1f36, #1c1f3f)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
    banner: {
      width: "40%",
      maxHeight: "400px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "30px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
    },
    backButton: {
      marginBottom: "20px",
      color: "#e2b645",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "1.2rem",
      alignSelf: "flex-start",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#e2b645",
      textAlign: "center",
      marginBottom: "15px",
    },
    price: {
      fontSize: "2.2rem",
      fontWeight: "600",
      color: "#e2b645",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.3rem",
      lineHeight: "1.8",
      marginBottom: "30px",
      color: "#a9b3c1",
      textAlign: "left",
      width: "40%",
      maxWidth: "600px",
    },
    buyButton: {
      background: "linear-gradient(90deg, #e2b645, #f5cc79)",
      color: "#fff",
      padding: "15px 40px",
      borderRadius: "8px",
      cursor: "pointer",
      border: "none",
      fontSize: "1.2rem",
      transition: "background-color 0.3s ease",
      marginBottom: "20px",
      width: "fit-content",
    },
    fundsContainer: {
      width: "80%",
      marginBottom: "30px",
    },
    progressBar: {
      width: "100%",
      height: "12px",
      borderRadius: "6px",
      backgroundColor: "#34495e",
      marginBottom: "10px",
    },
    progressColor: (percentage) => ({
      height: "100%",
      borderRadius: "6px",
      backgroundColor:
        percentage < 25 ? "#d35400" : percentage < 50 ? "#e67e22" : "#27ae60",
      width: `${percentage}%`,
      transition: "width 0.5s ease-in-out",
    }),
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    modal: {
      backgroundColor: "#1a1f36",
      padding: "30px",
      borderRadius: "15px",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
    },
    inputField: {
      padding: "12px",
      width: "120px",
      fontSize: "1.3rem",
      textAlign: "center",
      marginBottom: "20px",
      border: "1px solid #a9b3c1",
      borderRadius: "5px",
      marginRight: "20px",
      backgroundColor: "#34495e",
      color: "#fff",
    },
    modalButton: {
      background: "linear-gradient(90deg, #e2b645, #f5cc79)",
      color: "white",
      padding: "12px 30px",
      borderRadius: "8px",
      cursor: "pointer",
      border: "none",
      fontSize: "1.2rem",
      marginTop: "20px",
    },
    modalButtonCancel: {
      backgroundColor: "#e74c3c",
      color: "white",
      padding: "12px 30px",
      borderRadius: "8px",
      cursor: "pointer",
      border: "none",
      fontSize: "1.2rem",
      marginTop: "20px",
      marginLeft: "10px",
    },
    stakingButton: {
      marginTop: "20px",
      padding: "15px 30px",
      background: "linear-gradient(90deg, #1c4c8f, #275fa3)",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1.2rem",
    },
  };

  if (loading) {
    return (
      <div style={styles.page}>
        <LoadingSpinner />
      </div>
    );
  }

  if (!nft) {
    return <div style={styles.page}>NFT not found</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.backButton} onClick={handleBack}>
        &#8592; Back to Marketplace
      </div>
      <img style={styles.banner} src={nft.image} alt={nft.name} />

      <h1 style={styles.header}>{nft.name}</h1>
      <p style={styles.price}>${nft.amount.toLocaleString()}</p>

      <button style={styles.buyButton} onClick={handleBuy}>
        Buy Now
      </button>
      <div style={styles.fundsContainer}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Raised: ${raisedFunds.toLocaleString()}</div>
          <div>Target: ${nft.amount.toLocaleString()}</div>
        </div>
        <div style={styles.progressBar}>
          <div style={styles.progressColor(getProgressPercentage())} />
        </div>
      </div>

      <p>Available Amount: ${(nft.amount - raisedFunds).toLocaleString()}</p>
      <h1 style={styles.header}>Description</h1>
      {nft.description && <p style={styles.description}>{nft.description}</p>}

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Buy {nft.name}</h2>
            <p>Price per Unit: $50</p>
            <label>Units to Buy: </label>
            <input
              type="number"
              min="0"
              max={maxUnits}
              value={units}
              onChange={handleUnitsChange}
              style={styles.inputField}
            />
            <p>Total Price: ${totalPrice}</p>

            {/* Lock Time Selection */}
            <label>Lock Time (Years): </label>
            <select
              value={lockTime}
              onChange={handleLockTimeChange}
              style={styles.selectField}
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
            </select>

            <div style={styles.modalProgressContainer}>
              <div style={styles.progressColor(getModalProgressPercentage())} />
              <LinearProgress
                variant="determinate"
                value={getModalProgressPercentage()}
                style={{ height: "12px", borderRadius: "5px" }}
              />
            </div>

            <button style={styles.modalButton} onClick={handleConfirmPayment}>
              Confirm Payment
            </button>
            <button
              style={styles.modalButtonCancel}
              onClick={() => {
                setShowModal(false);
                setUnits(0);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NFTDetails;
