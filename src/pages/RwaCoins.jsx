import { useNavigate } from "react-router-dom";

const RWATokenPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/marketplace"); // Redirect to /marketplace when the button is clicked
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
        <h2 style={styles.sectionTitle}>About RWA</h2>
        <p style={styles.description}>
          RWA is a digital token on BSC representing ownership or rights to
          real-world assets. Designed for enhanced liquidity, fractional
          ownership, and transparent asset management.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>RWA Tokenization</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> The process of converting physical
            asset ownership into digital tokens on blockchain.
          </li>
          <li style={styles.listItem}>
            <strong>Benefits:</strong> Facilitates fractional ownership,
            increased liquidity, and efficient asset transfer.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Smart Contracts</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> Self-executing contracts with terms
            coded into blockchain.
          </li>
          <li style={styles.listItem}>
            <strong>Role:</strong> Automates transactions, ensures transparency,
            and eliminates intermediaries.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Oracles and Data Feeds</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> Services providing real-world data to
            smart contracts.
          </li>
          <li style={styles.listItem}>
            <strong>Importance:</strong> Enables smart contracts on BSC to
            interact with external events and information.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Multi-chain Tokenization</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Concept:</strong> Tokens operable across multiple blockchain
            networks.
          </li>
          <li style={styles.listItem}>
            <strong>Advantages:</strong> Enhances flexibility, expands market
            reach, and supports diverse use cases.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Custody and Security</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Importance:</strong> Ensures safe storage and management of
            digital assets represented by tokens.
          </li>
          <li style={styles.listItem}>
            <strong>Measures:</strong> Robust security practices safeguard
            against theft, loss, and unauthorized access.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Stable Token (RWAUSD)</h2>
        <p style={styles.description}>
          RWAUSD is a stable token locked for four years, designed to minimize
          price volatility by being pegged to a stable asset such as USD.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Commission Structure</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Participants can earn commissions across 12 levels from referrals.
          </li>
          <li style={styles.listItem}>
            <strong>RSP and CV:</strong> Rewards increase with the duration
            tokens are locked, ranging from 1 to 4 years.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Purchase Options</h2>
        <p style={styles.description}>
          Participants can buy RWAUSD using top 10 cryptocurrencies or specific
          payment modes like RWATOKE, RWAUSD, and Wallet Money.
        </p>
      </div>

      <button style={styles.button} onClick={handleButtonClick}>Start Investing</button>
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
    maxWidth: "900px",
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
