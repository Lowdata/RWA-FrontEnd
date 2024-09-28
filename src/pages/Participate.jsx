import { Button } from "@mui/material";

// Importing the components from Learn More section
const WhatIsWRA = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>What is WRA: Wealth Real Assets</h2>
    <p style={styles.paragraph}>
      WRA is a comprehensive digital ecosystem offering financial instruments
      tied to real-world assets. It empowers users by offering investment
      opportunities that are typically reserved for institutional investors.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Decentralized asset management
        platform.
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Maximizing investment potential.
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Access to tokenized assets with
        global security standards.
      </li>
    </ul>
  </section>
);

const WhatIsRWA = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>What is RWA: Real World Assets</h2>
    <p style={styles.paragraph}>
      RWA is the underlying framework that tokenizes physical, real-world
      assets, converting them into digital tokens that can be easily traded.
      This unlocks liquidity and transparency in traditionally illiquid markets.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Tokenization of real-world assets.
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Global investor access.
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Promotes liquidity in traditionally
        illiquid markets.
      </li>
    </ul>
  </section>
);

const HowItWorks = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>How It Works: Integrity at the Core</h2>
    <p style={styles.paragraph}>
      The WRA and RWA platforms are designed with integrity as the central
      pillar. Utilizing blockchain technology, every transaction is secure,
      verifiable, and transparent. This ensures that all investments made are
      backed by actual assets with rigorous auditing.
    </p>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Asset Identification
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Tokenization
      </li>
      <li style={styles.listItem}>
        <span style={styles.bullet}>•</span> Trading and Investment
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

      {/* Content from Learn More */}
      <section style={styles.additionalContent}>
        <WhatIsWRA />
        <WhatIsRWA />
        <HowItWorks />
      </section>
    </div>
  );
};

// Define your styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures it takes full height
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
    fontSize: "1.2rem",
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
    fontSize: "1.2rem",
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
  },
  bullet: {
    fontSize: "1.4rem",
    marginRight: "0.5rem",
    color: "#F0C419",
  },
};

export default ParticipateSection;
