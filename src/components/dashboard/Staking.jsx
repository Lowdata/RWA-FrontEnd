import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { stake } from "../../pages/ProductPage"; // Assuming stake is an array with the purchase data

const StakingPage = () => {
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);

  // Function to calculate time left for the lock-in based on the selected lockTime
  const calculateTimeLeft = (purchaseDate, lockTime) => {
    const lockDuration = lockTime * 365 * 24 * 60 * 60 * 1000; // Convert lockTime in years to milliseconds
    const timeElapsed = Date.now() - new Date(purchaseDate).getTime();
    const timeLeft = lockDuration - timeElapsed;

    if (timeLeft <= 0) return "Unlocked"; // Timer has passed lockTime
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Roboto', sans-serif",
      color: "#E0E0E0", // Light text
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#CBA135", // Softer gold text
    },
    nftCard: {
      width: "100%",
      maxWidth: "400px",
      backgroundColor: "#112240", // Darker metal blue for card background
      borderRadius: "12px",
      border: "2px solid #CBA135", // Softer gold border
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.6)", // Stronger shadow for depth
      marginBottom: "20px",
    },
    cardContent: {
      padding: "20px",
      textAlign: "center",
      color: "#F5E6C5", // Softer gold text for a luxurious feel
    },
    nftImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    nftName: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#CBA135", // Softer gold text for the name
    },
    units: {
      fontSize: "1.1rem",
      color: "#ADD8E6", // Matte blue for units
    },
    lockTimer: {
      fontSize: "1rem",
      color: "#CBA135", // Softer gold for lock timer
      marginTop: "10px",
    },
    noNFTMessage: {
      textAlign: "center",
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "20px",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: "#CBA135", // Softer gold button
      color: "#1C1C1E", // Dark text on gold
      boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)", // Subtle glow effect
      "&:hover": {
        backgroundColor: "#CBA135", // Same gold button on hover
        boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)", // Softer glow on hover
      },
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>My Staked NFTs</h1>

      {purchasedNFTs.length === 0 ? (
        <p style={styles.noNFTMessage}>You have no staked NFTs.</p>
      ) : (
        purchasedNFTs.map((nft) => (
          <Card key={nft.id} style={styles.nftCard}>
            <CardContent style={styles.cardContent}>
              {nft.image && (
                <img src={nft.image} alt={nft.name} style={styles.nftImage} />
              )}
              <Typography variant="h6" style={styles.nftName}>
                {nft.name}
              </Typography>
              <Typography style={styles.units}>Units: {nft.units}</Typography>
              <Typography style={styles.lockTimer}>
                Lock-in Timer:{" "}
                {calculateTimeLeft(nft.purchaseDate, nft.lockTime)}
              </Typography>
              <Button variant="contained" style={styles.button}>
                View Details
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default StakingPage;
