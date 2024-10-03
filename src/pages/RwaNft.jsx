import { useNavigate } from "react-router-dom";
const RWANFTPackage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate("/marketplace"); // Redirect to /marketplace when the button is clicked
    };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>RWA NFT Package</h1>
        <p style={styles.subtitle}>
          Revolutionary digital ownership and investment opportunity.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Introduction to RWA NFT</h2>
        <p style={styles.description}>
          RWA NFT (Real World Asset Non-Fungible Token) represents a new way to
          own and invest in real-world assets. Backed by blockchain technology,
          it ensures security, transparency, and immutability.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Unique Features and Benefits</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Digital Ownership: Verifiable proof of ownership for real-world
            assets.
          </li>
          <li style={styles.listItem}>
            Interoperability: Seamless integration across platforms using
            blockchain.
          </li>
          <li style={styles.listItem}>
            Immutable Record: Prevents duplication or counterfeiting.
          </li>
          <li style={styles.listItem}>
            Fractional Ownership: Invest in high-value assets with fractional
            ownership.
          </li>
          <li style={styles.listItem}>
            Liquidity: Easily tradable in digital marketplaces.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Future Potential</h2>
        <p style={styles.description}>
          RWANFTs have the potential to reshape industries, democratizing
          ownership of real-world assets. Blockchain technology ensures constant
          evolution and expansion into new sectors.
        </p>
      </div>

      <div style={styles.package}>
        <h2 style={styles.packageTitle}>Package Details</h2>
        <p style={styles.packageDetails}>
          CV (Contribution Value): 40%, Price: $50 per unit. RWANFTs provide
          strong potential for value appreciation, backed by real-world assets.
        </p>
        <ul style={styles.packageList}>
          <li style={styles.listItem}>
            Limited Availability: Only up to 100 Cr. RWANFTs can be uploaded.
          </li>
          <li style={styles.listItem}>
            Investment Threshold: For investments over 100 Cr., opt for RWA
            Investment.
          </li>
          <li style={styles.listItem}>
            Tangible Asset Backing: Each RWANFT is secured by real-world assets.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Profit Distribution Model</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>One-Time 40% CV Distribution</li>
          <li style={styles.listItem}>
            Sourcing Partner: 1% of Business Volume allocated.
          </li>
          <li style={styles.listItem}>
            Profit from RWA Projects: Revenue generation from RWA projects.
          </li>
        </ul>
      </div>

      <button style={styles.button}
      onClick={handleButtonClick}
      >Start Investing</button>
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
  package: {
    padding: "20px",
    backgroundColor: "#2d2d44",
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
    backgroundColor: "#ffdf00",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s",
  },
};

export default RWANFTPackage;
