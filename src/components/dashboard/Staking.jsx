import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Alert } from "@mui/material";
import { stakeCoins } from "../../pages/Marketplace";
import { stake } from "../../pages/ProductPage";
import { fetchInvestments } from "../../store/api/payments"; // Assuming the function fetchInvestments is here

const StakingPage = () => {
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);
  const [stakedCoins, setStakedCoins] = useState([]);
  const [alert, setAlert] = useState(null);
  const [apiNFTs, setApiNFTs] = useState([]); // For storing API-fetched NFTs
  const [apiCoins, setApiCoins] = useState([]); // For storing API-fetched coins

  // Function to calculate time left for the lock-in
  const calculateTimeLeft = (purchaseDate, lockTime) => {
    const lockDuration = lockTime * 365 * 24 * 60 * 60 * 1000; // Convert lockTime in years to milliseconds
    const timeElapsed = Date.now() - new Date(purchaseDate).getTime();
    const timeLeft = lockDuration - timeElapsed;

    if (timeLeft <= 0) return "Unlocked";
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  };

  useEffect(() => {
    // Fetch investments from the API
    const fetchData = async () => {
      try {
        const response = await fetchInvestments(); // Assume fetchInvestments takes care of fetching
        const investments=response.investments||[];// Set API-fetched NFTs
      } catch (error) {
        console.error("Error fetching investments:", error);
        setAlert({
          type: "error",
          message: "No inestments.",
        });
      }
    };

    fetchData();

    // Set the initial local staked NFTs and coins
    setPurchasedNFTs(stake);
    setStakedCoins(stakeCoins);

    const intervalId = setInterval(() => {
      setPurchasedNFTs((prevNFTs) => [...prevNFTs]);
      setStakedCoins((prevCoins) => [...prevCoins]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleUnstake = (id, type) => {
    if (type === "coin") {
      // Remove the coin with the matching ID from stakedCoins
      const updatedCoins = stakedCoins.filter((coin) => coin.id !== id);
      setStakedCoins(updatedCoins);
      setAlert({ type: "success", message: "Coin unstaked successfully!" });
    } else if (type === "nft") {
      // Remove the NFT with the matching ID from purchasedNFTs
      const updatedNFTs = purchasedNFTs.filter((nft) => nft.id !== id);
      setPurchasedNFTs(updatedNFTs);
      setAlert({ type: "success", message: "NFT unstaked successfully!" });
    }

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const styles = {
    page: { maxWidth: "1200px", margin: "0 auto", padding: "20px" },
    sectionHeader: {
      fontSize: "1.8rem",
      marginBottom: "15px",
      color: "#CBA135",
    },
    nftCard: {
      maxWidth: "400px",
      backgroundColor: "#112240",
      marginBottom: "20px",
    },
    cardContent: { padding: "20px", textAlign: "center" },
    lockTimer: { marginTop: "10px", color: "#CBA135" },
    noNFTMessage: { fontSize: "1.2rem", color: "#666" },
    button: { marginTop: "10px", backgroundColor: "#CBA135" },
  };

  return (
    <div style={styles.page}>
      {alert && (
        <Alert variant="filled" severity={alert.type}>
          {alert.message}
        </Alert>
      )}

      <h1 style={styles.sectionHeader}>Staked Coins</h1>
      {/* Render locally-staked and API-fetched staked coins */}
      {stakedCoins.length === 0 && apiCoins.length === 0 ? (
        <p style={styles.noNFTMessage}>You have no staked coins.</p>
      ) : (
        [...stakedCoins, ...apiCoins].map((coin) => (
          <Card key={coin.id} style={styles.nftCard}>
            <CardContent style={styles.cardContent}>
              <Typography variant="h6">{coin.name}</Typography>
              <Typography>Amount: {coin.amount}</Typography>
              <Typography style={styles.lockTimer}>
                Lock-in Timer:{" "}
                {calculateTimeLeft(coin.purchaseDate, coin.lockTime)}
              </Typography>
              <Button
                variant="contained"
                style={styles.button}
                onClick={() => handleUnstake(coin.id, "coin")}
              >
                Unstake
              </Button>
            </CardContent>
          </Card>
        ))
      )}

      <h1 style={styles.sectionHeader}>Staked NFTs</h1>
      {/* Render locally-staked and API-fetched staked NFTs */}
      {purchasedNFTs.length === 0 && apiNFTs.length === 0 ? (
        <p style={styles.noNFTMessage}>You have no staked NFTs.</p>
      ) : (
        [...purchasedNFTs, ...apiNFTs].map((nft) => (
          <Card key={nft.id} style={styles.nftCard}>
            <CardContent style={styles.cardContent}>
              {nft.image && <img src={nft.image} alt={nft.name} />}
              <Typography variant="h6">{nft.name}</Typography>
              <Typography>Units: {nft.units}</Typography>
              <Typography style={styles.lockTimer}>
                Lock-in Timer:{" "}
                {calculateTimeLeft(nft.purchaseDate, nft.lockTime)}
              </Typography>
              <Button
                variant="contained"
                style={styles.button}
                onClick={() => handleUnstake(nft.id, "nft")}
              >
                Unstake
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default StakingPage;
