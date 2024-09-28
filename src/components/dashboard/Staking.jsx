import React, { useEffect, useState } from "react";
import { stake } from "../../pages/ProductPage";

const StakingPage = () => {
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);

  // Function to calculate time left for the 4-year lock-in
  const calculateTimeLeft = (purchaseDate) => {
    const lockDuration = 4 * 365 * 24 * 60 * 60 * 1000; // 4 years in milliseconds
    const timeElapsed = Date.now() - new Date(purchaseDate).getTime();
    const timeLeft = lockDuration - timeElapsed;

    if (timeLeft <= 0) return "Unlocked"; // Timer has passed 4 years
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Convert to days
    const hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display time left in days, hours, minutes, and seconds
    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  };

  useEffect(() => {
    // Set the initial staked NFTs from the stake array
    setPurchasedNFTs(stake);

    // Create an interval to update the timers every second
    const intervalId = setInterval(() => {
      setPurchasedNFTs((prevNFTs) => [...prevNFTs]); // Trigger re-render for timer updates
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const styles = {
    page: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#003366",
    },
    nftCard: {
      backgroundColor: "#fff",
      borderRadius: "8px", // Smaller border radius for a more rectangular look
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Adjusted shadow for more depth
      border: "1px solid #ccc", // Added a border
      padding: "15px",
      width: "250px", // Made the card smaller
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    nftImage: {
      width: "100%", // Ensure image fills the width of the card
      height: "auto",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    nftName: {
      fontSize: "1.3rem",
      fontWeight: "bold",
      color: "#333",
    },
    units: {
      fontSize: "1.1rem",
      color: "#666",
    },
    lockTimer: {
      fontSize: "0.9rem",
      color: "#0066cc",
      marginTop: "10px",
    },
    noNFTMessage: {
      textAlign: "center",
      fontSize: "1.2rem",
      color: "#666",
    },
    nftList: {
      display: "flex",
      justifyContent: "space-around", // Space out the cards
      flexWrap: "wrap", // Wrap the cards on smaller screens
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>My Staked NFTs</h1>

      {purchasedNFTs.length === 0 ? (
        <p style={styles.noNFTMessage}>You have no staked NFTs.</p>
      ) : (
        <div style={styles.nftList}>
          {purchasedNFTs.map((nft) => (
            <div key={nft.id} style={styles.nftCard}>
              {nft.image && (
                <img src={nft.image} alt={nft.name} style={styles.nftImage} />
              )}
              <div style={styles.nftName}>{nft.name}</div>
              <div style={styles.units}>Units: {nft.units}</div>
              <div style={styles.lockTimer}>
                Lock-in Timer: {calculateTimeLeft(nft.purchaseDate)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StakingPage;
