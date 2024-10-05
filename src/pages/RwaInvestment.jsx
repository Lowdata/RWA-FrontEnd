import { useNavigate } from "react-router-dom";

const RWAInvestment = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/marketplace"); // Redirect to /marketplace when the button is clicked
  };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>RWA Investment</h1>
        <p style={styles.subtitle}>Products with over $10 million market cap</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Real Estate</h2>
        <p style={styles.description}>
          Real Estate NFTs digitize property ownership, enabling fractional
          investments, seamless transactions, and enhanced liquidity in the real
          estate market.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Residential Real Estate</li>
          <li style={styles.listItem}>Commercial Real Estate</li>
          <li style={styles.listItem}>Real Estate Development</li>
          <li style={styles.listItem}>Vacation and Rental Properties</li>
          <li style={styles.listItem}>Real Estate Investment Trusts (REITs)</li>
          <li style={styles.listItem}>Property Management and Maintenance</li>
          <li style={styles.listItem}>Real Estate Tokenization</li>
          <li style={styles.listItem}>Real Estate Auctions and Sales</li>
          <li style={styles.listItem}>Property Valuation and Appraisal</li>
          <li style={styles.listItem}>Blockchain-based Land Registries</li>
          <li style={styles.listItem}>Real Estate Crowdfunding</li>
          <li style={styles.listItem}>Green and Sustainable Real Estate</li>
          <li style={styles.listItem}>
            Real Estate Finance and Mortgage Services
          </li>
          <li style={styles.listItem}>International Real Estate Investments</li>
          <li style={styles.listItem}>
            Real Estate Insurance and Risk Management
          </li>
        </ul>
      </div>

      <div style={styles.package}>
        <h2 style={styles.packageTitle}>RWA Investment Package Staking</h2>
        <p style={styles.packageDetails}>
          Package Details: Cv (Commissionable Value) 40%, Price: $50 Per Unit,
          Every Day Earning 0.1% RSP For Next 4 Years. After Listing User Can
          Sell The RWAtoken 5% On Exchange.
        </p>
        <ul style={styles.packageList}>
          <li style={styles.listItem}>Overview Of Benefits And Returns</li>
          <li style={styles.listItem}>
            Potential For One-time Investment Or Royalty Earnings
          </li>
          <li style={styles.listItem}>
            Investment Date: Date when investments commence
          </li>
          <li style={styles.listItem}>
            Number of Units: Quantity purchased by investors
          </li>
          <li style={styles.listItem}>
            Opening Date/Closing Date: Duration of the staking period
          </li>
        </ul>
      </div>

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
    margin: " auto",
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
    color: "#ffdf00", // Royal gold color
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
    backgroundColor: "rgba(45, 45, 68, 0.9)", // Darker shade background with opacity
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  package: {
    padding: "20px",
    backgroundColor: "#2d2d44", // Matt finish-like background
    borderRadius: "8px",
    marginBottom: "30px",
  },
  packageTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ffdf00",
    marginBottom: "10px",
  },
  packageDetails: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#fff",
    marginBottom: "20px",
    opacity: "0.85",
  },
  packageList: {
    listStyleType: "circle",
    paddingLeft: "20px",
  },
  button: {
    display: "block",
    width: "200px",
    margin: "0 auto",
    padding: "15px 25px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ffdf00", // Rich gold color
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s",
  },
};

// Hover effect for button
styles.button[":hover"] = {
  transform: "scale(1.05)",
};

export default RWAInvestment;
