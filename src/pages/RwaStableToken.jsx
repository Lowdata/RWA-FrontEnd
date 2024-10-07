import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Alert } from "@mui/material";
const StableTokenPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    if (isLoggedIn) navigate("/marketplace");
    else {
      setShowAlert(true);
      setTimeout(() => {
        navigate("/register");
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Real World Asset USD Stable coin (RWAUSD)</h1>
        <p style={styles.subtitle}>
          Stable coin designed to minimize price volatility.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Coin Information</h2>
        <p style={styles.description}>
          <strong>Stable Token:</strong> Locked for 4 years
        </p>
        <p style={styles.description}>
          <strong>Total Supply:</strong> 500 billion Coins
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Stable coin Characteristics</h2>
        <p style={styles.description}>
          RWAUSD is designed to minimize price volatility by being pegged to a
          stable asset, such as USD.
        </p>
        <p style={styles.description}>
          Locked for four years to ensure price stability and provide a strong
          financial backing.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Products and Services Overview</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Direct Royalty</li>
          <li style={styles.listItem}>Generation Bonus</li>
          <li style={styles.listItem}>Leadership Bonus</li>
          <li style={styles.listItem}>Company TO Pool Bonus</li>
          <li style={styles.listItem}>Global Matrix Bonus</li>
          <li style={styles.listItem}>Meeting Fund</li>
          <li style={styles.listItem}>Trip and Coin Reward Points</li>
        </ul>
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

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    padding: "20px",
    background: "linear-gradient(135deg, #1f1c2c, #928DAB)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    margin: "auto",
    width: "100%",
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

export default StableTokenPage;
