import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
const RWATokenPage = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 
    const [showAlert, setShowAlert] = useState(false); 
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isLoggedIn) navigate("/marketplace");
    else {
      setShowAlert(true);
      setTimeout(() => {
        navigate("/register");
      }, 2000);
      // navigate("/register")
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Real World Asset Token (RWA)</h1>
        <p style={styles.subtitle}>
          Blockchain-powered asset ownership and investment.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Blockchain and Supply</h2>
        <p style={styles.description}>
          <strong>Blockchain:</strong> Binance Smart Chain (BSC)
        </p>
        <p style={styles.description}>
          <strong>Total Supply:</strong> 100 billion tokens
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>RWA Tokenization</h2>
        <p style={styles.description}>
          The process of converting physical asset ownership into digital tokens
          on the blockchain.
        </p>
        <p style={styles.description}>
          <strong>Benefits:</strong> Facilitates fractional ownership, increased
          liquidity, and efficient asset transfer.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Smart Contracts</h2>
        <p style={styles.description}>
          Self-executing contracts with terms coded into the blockchain.
        </p>
        <p style={styles.description}>
          <strong>Role:</strong> Automates transactions, ensures transparency,
          and eliminates intermediaries.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Oracles and Data Feeds</h2>
        <p style={styles.description}>
          Services that provide real-world data to smart contracts.
        </p>
        <p style={styles.description}>
          <strong>Importance:</strong> Enables smart contracts to interact with
          external events and information on Binance Smart Chain (BSC).
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Multi-chain Tokenization</h2>
        <p style={styles.description}>
          Tokens that operate across multiple blockchain networks.
        </p>
        <p style={styles.description}>
          <strong>Advantages:</strong> Enhances flexibility, expands market
          reach, and supports diverse use cases.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Custody and Security</h2>
        <p style={styles.description}>
          Ensures the safe storage and management of digital assets represented
          by tokens.
        </p>
        <p style={styles.description}>
          <strong>Measures:</strong> Robust security practices safeguard against
          theft, loss, and unauthorized access.
        </p>
      </div>
      {/* Material UI Alert component */}
      {showAlert && (
        <Alert severity="warning" onClose={() => setShowAlert(false)}>
          Please register or log in to start investing!
        </Alert>
      )}
      <button style={styles.button} onClick={handleButtonClick}>
        Start Investing
      </button>
    </div>
  );
};

// CSS in JS
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    padding: "20px",
    background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    width:"100%"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#ffdf00",
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: "300",
    color: "#fff",
    marginTop: "10px",
    opacity: "0.8",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#ffdf00",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    opacity: "0.9",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginTop: "20px",
  },
  listItem: {
    backgroundColor: "rgba(45, 45, 68, 0.9)",
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  button: {
    display: "block",
    width: "200px",
    margin: "0 auto",
    padding: "15px 25px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ffdf00",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s",
  },
};

export default RWATokenPage;
