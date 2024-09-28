import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApprovedProducts } from "./Marketplace";
import { LinearProgress } from "@mui/material";
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

  useEffect(() => {
    const fetchNFTDetails = async () => {
      try {
        const products = await getApprovedProducts();
        const product = products.find((p) => p.id.toString() === id);
        if (product) {
          setNft(product);
          setMaxUnits(Math.floor(product.amount / 50));
          setRaisedFunds(product.raised || 0); // Default raised funds to 0 if not available
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

  const goToStaking = () => {
    navigate("/dashboard", { state: { currentPage: "Staking" } });
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
      purchaseDate: new Date().toISOString(),
    };
    const newRaisedAmount = raisedFunds + totalPrice; // Update raised funds based on total price
    setRaisedFunds(newRaisedAmount); // Set the new raised amount

    // Push the purchase details into the stake array
    stake.push(purchaseDetails);

    setShowModal(false);
  };

  const styles = {
    page: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px 20px",
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#fff",
      color: "#333",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    banner: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "30px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    backButton: {
      marginBottom: "20px",
      color: "#3498db",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "1rem",
      marginLeft: "-766px",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#003366",
      textAlign: "center",
      marginBottom: "15px",
    },
    price: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#0066cc",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "20px",
      color: "#666",
      textAlign: "center",
    },
    buyButton: {
      backgroundColor: "#0066cc",
      color: "white",
      padding: "15px 30px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      fontSize: "18px",
      transition: "background-color 0.3s ease",
      marginBottom: "30px",
    },
    fundsContainer: {
      width: "80%",
      marginBottom: "30px",
    },
    progressBar: {
      width: "100%",
      height: "10px",
      borderRadius: "5px",
      backgroundColor: "#e0e0e0",
      marginBottom: "10px",
    },
    progressColor: (percentage) => ({
      height: "15px",
      borderRadius: "5px",
      backgroundColor:
        percentage < 25 ? "#ff4d4f" : percentage < 50 ? "#ffa940" : "#4caf50",
      transition: "width 0.5s ease-in-out",
    }),
    footer: {
      marginTop: "50px",
      color: "#666",
      textAlign: "center",
    },
    raisedText: {
      textAlign: "left",
      fontSize: "1rem",
    },
    targetText: {
      textAlign: "right",
      fontSize: "1rem",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    modal: {
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "10px",
      maxWidth: "400px",
      width: "50%",
      textAlign: "center",
    },
    slider: {
      width: "100%",
      marginTop: "20px",
    },
    inputField: {
      padding: "10px",
      width: "100px",
      fontSize: "1.2rem",
      textAlign: "center",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginRight: "20px",
    },
    modalButton: {
      backgroundColor: "#0066cc",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      marginTop: "20px",
      marginLeft: "10px",
    },
    modalButtonCancel: {
      backgroundColor: "#cc0000",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      marginTop: "20px",
    },
    modalProgressContainer: {
      marginTop: "10px",
      marginBottom: "10px",
      width: "100%",
    },
    stakingButton: {
      marginTop: "20px",
      padding: "10px 15px",
      backgroundColor: "#0066cc",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  if (loading) {
    return (
      <div style={styles.page}>
       <LoadingSpinner/>
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
      <p style={styles.price}>${nft.amount}</p>

      <button style={styles.buyButton} onClick={handleBuy}>
        Buy Now
      </button>

      <div style={styles.fundsContainer}>
        <div style={styles.raisedText}>Raised: ${raisedFunds}</div>
        <div style={styles.progressBar}>
          <div
            style={styles.progressColor(getProgressPercentage())}
            width={`${getProgressPercentage()}%`}
          >
            <LinearProgress
              variant="determinate"
              value={getProgressPercentage()}
              style={styles.progressColor(getProgressPercentage())}
            />
          </div>
        </div>
        <div style={styles.targetText}>Target: ${nft.amount}</div>
      </div>

      <p>Available Amount: ${nft.amount - raisedFunds}</p>
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

            <div style={styles.modalProgressContainer}>
              <div
                style={styles.progressColor(getProgressPercentage())}
                width={`${getProgressPercentage()}%`}
              >
                <LinearProgress
                  variant="determinate"
                  value={getModalProgressPercentage()}
                  style={{ height: "15px", borderRadius: "5px" }}
                />
              </div>
            </div>

            <button
              style={styles.modalButton}
              onClick={() => {
                setShowModal(false);
                handleConfirmPayment();
              }}
            >
              Confirm Payment
            </button>
            <button
              style={styles.modalButtonCancel}
              onClick={() => {
                
                setShowModal(false)
            setUnits(0);}}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <button style={styles.stakingButton} onClick={goToStaking}>
        Go to Your Staking
      </button>
      <div style={styles.footer}>© 2024 NFT Marketplace</div>
    </div>
  );
};

export default NFTDetails;
