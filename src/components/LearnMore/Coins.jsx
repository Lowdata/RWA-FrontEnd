import { Card, CardContent, Typography } from "@mui/material";
import { tokenomics, airdrop } from "../../assets/images";

// Tokenomics Section
const Tokenomics = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Real World Asset Coin</h2>
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h6" style={styles.cardTitle}>
          Real World Asset Token (RWA)
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Blockchain:</strong> Binance Smart Chain (BSC)
          </li>
          <li style={styles.listItem}>
            <strong>Total Supply:</strong> 100 billion tokens
          </li>
        </ul>

        <Typography variant="h6" style={styles.cardTitle}>
          RWA Tokenization
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> The process of converting physical
            asset ownership into digital tokens on blockchain.
          </li>
          <li style={styles.listItem}>
            <strong>Benefits:</strong> Facilitates fractional ownership,
            increased liquidity, and efficient asset transfer.
          </li>
        </ul>

        <Typography variant="h6" style={styles.cardTitle}>
          Smart Contracts
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> Self-executing contracts with terms
            coded into blockchain.
          </li>
          <li style={styles.listItem}>
            <strong>Role:</strong> Automates transactions, ensures transparency,
            and eliminates intermediaries.
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Oracles and Data Feeds */}
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h6" style={styles.cardTitle}>
          Oracles and Data Feeds
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Definition:</strong> Services providing real-world data to
            smart contracts.
          </li>
          <li style={styles.listItem}>
            <strong>Importance:</strong> Enables smart contracts on BSC to
            interact with external events and information.
          </li>
        </ul>

        <Typography variant="h6" style={styles.cardTitle}>
          Multi-chain Tokenization
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Concept:</strong> Tokens operable across multiple blockchain
            networks.
          </li>
          <li style={styles.listItem}>
            <strong>Advantages:</strong> Enhances flexibility, expands market
            reach, and supports diverse use cases.
          </li>
        </ul>

        <Typography variant="h6" style={styles.cardTitle}>
          Standardization and Interoperability
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Objective:</strong> Establishes common protocols for
            seamless asset interaction across blockchains.
          </li>
          <li style={styles.listItem}>
            <strong>Benefits:</strong> Improves compatibility, promotes
            scalability, and fosters ecosystem growth.
          </li>
        </ul>

        <Typography variant="h6" style={styles.cardTitle}>
          Custody and Security
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            <strong>Importance:</strong> Ensures safe storage and management of
            digital assets represented by tokens.
          </li>
          <li style={styles.listItem}>
            <strong>Measures:</strong> Robust security practices safeguard
            against theft, loss, and unauthorized access.
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Tokenomics Section with Image */}
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h6" style={styles.cardTitle}>
          Tokenomics Overview
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>ICO: 20%</li>
          <li style={styles.listItem}>Staking Presale: 14.4%</li>
          <li style={styles.listItem}>Airdrop: 2%</li>
          <li style={styles.listItem}>Marketing & IT: 4%</li>
          <li style={styles.listItem}>Advisor: 2%</li>
          <li style={styles.listItem}>Operation & Administration: 2%</li>
          <li style={styles.listItem}>Management: 10%</li>
          <li style={styles.listItem}>Launch Pad Rewards: 5.6%</li>
          <li style={styles.listItem}>Presale: 10%</li>
          <li style={styles.listItem}>Long Term Treasury Fund: 10%</li>
          <li style={styles.listItem}>Presale ICO: 20%</li>
        </ul>

        {/* Tokenomics Image */}
        <div style={styles.imageContainer}>
          <img
            src={airdrop}
            alt="Tokenomics Chart"
            style={styles.tokenomicsImage}
          />
        </div>
      </CardContent>
    </Card>
  </section>
);

// Stable Token Section
const StableToken = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Real World Asset USD Stable Token</h2>
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h6" style={styles.cardTitle}>
          Stable Token (RWAUSD) Locked for 4 Years
        </Typography>
        <ul style={styles.cardList}>
          <li style={styles.listItem}>
            RWAUSD is a stable token locked for four years, designed to minimize
            price volatility by being pegged to a stable asset such as USD.
          </li>
          <li style={styles.listItem}>
            <strong>Total Supply:</strong> 500 billion tokens
          </li>
        </ul>
      </CardContent>
    </Card>
  </section>
);

// Products and Services Section
const ProductsAndServices = () => (
  <section style={styles.section}>
    <h2 style={styles.sectionTitle}>Products and Services Overview</h2>
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="body1" style={styles.cardDescription}>
          <ul style={styles.list}>
            <li style={styles.listItem}>Direct Royalty</li>
            <li style={styles.listItem}>Generation Bonus</li>
            <li style={styles.listItem}>Leadership Bonus</li>
            <li style={styles.listItem}>Leadership Matching Bonus</li>
            <li style={styles.listItem}>Company TO Pool Bonus</li>
            <li style={styles.listItem}>Global Matrix Bonus</li>
            <li style={styles.listItem}>Meeting Fund</li>
            <li style={styles.listItem}>Trip and Token Reward Points</li>
          </ul>
        </Typography>
      </CardContent>
    </Card>
  </section>
);

// Main Component
const Coin = () => {
  return (
    <div style={styles.pageContainer}>
      <Tokenomics />
      <StableToken />
      <ProductsAndServices />
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    fontFamily: "'Roboto', sans-serif",
    padding: "0 20px",
    textAlign: "center",
  },
  section: {
    padding: "3rem 0",
  },
  sectionTitle: {
    fontSize: "2.8rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em", // Letter spacing for better readability
  },
  card: {
    background: "#1A2F45", // Matte background
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow for elevation
    marginBottom: "2.5rem",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.02)", // Scale effect on hover
    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.4)", // Stronger shadow on hover
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1rem",
    textTransform: "uppercase", // Capitalized titles for emphasis
  },
  cardList: {
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    marginBottom: "0.8rem",
    padding: "1rem",
    backgroundColor: "#243B55", // Matte finish for list items
    borderRadius: "8px",
    color: "#E0E0E0",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#304B70",
      transform: "translateY(-5px)", // Lift on hover
    },
  },
  imageContainer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  tokenomicsImage: {
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
  },
};

export default Coin;
