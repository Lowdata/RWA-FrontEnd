import { Button } from "@mui/material";

// RWA Investment Section
const RWAInvestment = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>RWA Investment</h2>
    <p style={styles.paragraph}>
      RWA Investment offers participants the opportunity to invest in packages
      starting from $50, with the ability to purchase multiple units. 
      benefits.
    </p>
    
  </section>
);

// RWA Tokens Section
const RWATokens = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>RWA Tokens</h2>
    <p style={styles.paragraph}>
      <strong>Real World Asset Token (RWA)</strong> is a digital token on the
      Binance Smart Chain (BSC) representing ownership or rights to real-world
      assets. It is designed to enhance liquidity, provide fractional ownership,
      and transparent asset management.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>Blockchain: Binance Smart Chain (BSC)</li>
      <li style={styles.listItem}>Total Supply: 100 billion tokens</li>
      <li style={styles.listItem}>
        RWA Tokenization: Converting physical asset ownership into digital
        tokens.
      </li>
    </ul>
    <p style={styles.paragraph}>
      <strong>Stable Token (RWAUSD)</strong> is a stable token locked for four
      years, designed to minimize price volatility by being pegged to USD.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>Total Supply: 500 Billion</li>
      <li style={styles.listItem}>
        No capping or locking of stable coin supply
      </li>
    </ul>
  </section>
);

// RWA NFT Section
const RWANFT = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>RWA NFTs</h2>
    <p style={styles.paragraph}>
      RWA NFTs represent digital ownership of real-world assets, ranging from
      real estate to intellectual property, using blockchain technology for
      transparency, security, and fractional ownership.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Digital Ownership: Verifiable proof of ownership
      </li>
      <li style={styles.listItem}>
        Interoperability: Seamless integration across platforms
      </li>
      <li style={styles.listItem}>
        Immutable Record: Authenticity secured on blockchain
      </li>
      <li style={styles.listItem}>
        Fractional Ownership: Democratizes high-value asset access
      </li>
      <li style={styles.listItem}>
        Liquidity: Tradeable on digital marketplaces
      </li>
    </ul>
    <p style={styles.paragraph}>
      As blockchain evolves, RWANFTs will unlock additional opportunities for
      investors.
    </p>
  </section>
);

// Benefits Section
const Benefits = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>Benefits</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        Increased Liquidity and Market Accessibility
      </li>
      <li style={styles.listItem}>
        Fractional Ownership for Diverse Asset Classes
      </li>
      <li style={styles.listItem}>Transparent and Secure Transactions</li>
      <li style={styles.listItem}>
        Interoperability Across Blockchain Networks
      </li>
    </ul>
  </section>
);

const ParticipateSection = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Participate Section */}
      <section style={styles.participateSection}>
        <h2 style={styles.title}>Participate</h2>
        <p style={styles.paragraph}>
          Join the global community and participate in our sovereign network.
          Become a node provider and contribute to decentralization while
          benefiting from the opportunities of blockchain.
        </p>
        <div style={styles.buttonGroup}>
          <Button variant="contained" style={styles.actionButton}>
            Join Now
          </Button>
          <Button variant="contained" style={styles.actionButton}>
            Become a Node Provider
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      <section style={styles.additionalContent}>
        <RWAInvestment />
        <RWATokens />
        <RWANFT />
        <Benefits />
      </section>
    </div>
  );
};

// Define your styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#203C5E",
    color: "#FFFFFF",
  },
  participateSection: {
    padding: "4rem 2rem",
    background: "linear-gradient(to bottom, #203C5E, #8B6F56)",
    textAlign: "center",
    flex: "1",
  },
  additionalContent: {
    padding: "3rem",
    backgroundColor: "#1A2F45",
    color: "#FFF",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  paragraph: {
    fontSize: "1.8rem",
    fontWeight: "400",
    lineHeight: "1.7",
    marginBottom: "2rem",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  actionButton: {
    backgroundColor: "#F0C419",
    color: "#203C5E",
    padding: "1rem 2.5rem",
    fontSize: "1.3rem",
    borderRadius: "10px",
  },
  card: {
    backgroundColor: "#1A2F45",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "2.5rem",
    maxWidth: "800px",
    margin: "auto",
    marginTop: "10px",
  },
  sectionTitle: {
    fontSize: "2.8rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  list: {
    listStyle: "none",
    fontSize: "1.4rem",
    lineHeight: "1.8",
    textAlign: "left",
    margin: "0 auto",
    paddingLeft: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    padding: "1rem",
  },
  listItem: {
    marginBottom: "0.7rem",
    color: "#F0C419",
    fontWeight: "500",
    backgroundColor: "rgba(25, 155, 250, 0.1)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
  },
};

export default ParticipateSection;
