import { Button } from "@mui/material";

// Importing the components from Learn More section

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
      The RWA and RWA platforms are designed with integrity as the central
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

const RWAInvestment = () => {
  return (
    <div style={styles.investmentContainer}>
      <h1 style={styles.investmentTitle}>What is RWA Investment</h1>
      <p style={styles.investmentSubtitle}>
        Explore investment products with over $10 million market cap
      </p>

      <div style={styles.cardsContainer}>
        <div style={styles.investmentCard}>
          <h2 style={styles.cardTitle}>Real Estate</h2>
          <p style={styles.cardDescription}>
            Real Estate NFTs digitize property ownership, enabling fractional
            investments, seamless transactions, and enhanced liquidity in the
            real estate market.
          </p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>Residential Real Estate</li>
            <li style={styles.cardListItem}>Commercial Real Estate</li>
            <li style={styles.cardListItem}>Real Estate Development</li>
            <li style={styles.cardListItem}>Vacation and Rental Properties</li>
            <li style={styles.cardListItem}>
              Real Estate Investment Trusts (REITs)
            </li>
            <li style={styles.cardListItem}>Property Management</li>
          </ul>
        </div>

        <div style={styles.investmentCard}>
          <h2 style={styles.cardTitle}>Real Estate Finance</h2>
          <p style={styles.cardDescription}>
            Providing financial services for real estate acquisitions,
            development, and management, including loans, mortgages, and other
            funding mechanisms.
          </p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>Mortgage Services</li>
            <li style={styles.cardListItem}>Property Valuation</li>
            <li style={styles.cardListItem}>Real Estate Auctions</li>
            <li style={styles.cardListItem}>
              Blockchain-based Land Registries
            </li>
            <li style={styles.cardListItem}>Real Estate Crowdfunding</li>
          </ul>
        </div>

        <div style={styles.investmentCard}>
          <h2 style={styles.cardTitle}>Sustainable Real Estate</h2>
          <p style={styles.cardDescription}>
            Focus on green and eco-friendly real estate investments, ensuring
            sustainable development for a greener future.
          </p>
          <ul style={styles.cardList}>
            <li style={styles.cardListItem}>Green Buildings</li>
            <li style={styles.cardListItem}>Sustainable Developments</li>
            <li style={styles.cardListItem}>Energy-efficient Properties</li>
            <li style={styles.cardListItem}>Eco-friendly Construction</li>
          </ul>
        </div>
      </div>

      {/* Package Staking Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={styles.stakingContainer}>
          <h2 style={styles.stakingTitle}>RWA Investment Staking</h2>
          <p style={styles.stakingDetails}>
            • Definition: Real World Asset Investment involves allocating
            capital to tangible assets that exist in the physical world. • Goal:
            To diversify portfolios and achieve stable, long-term returns by
            investing in a variety of asset classes.
          </p>
          <ul style={styles.stakingList}>
            <li style={styles.stakingListItem}>
              Overview of Benefits and Returns
            </li>
            <li style={styles.stakingListItem}>
              Potential for One-time Investment or Royalty Earnings
            </li>
            <li style={styles.stakingListItem}>Investment Date and Duration</li>
            <li style={styles.stakingListItem}>Units Available for Purchase</li>
            <li style={styles.stakingListItem}>
              Staking Period: Opening and Closing Dates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StableToken = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>RWAUSD: Stable Token</h2>
    <p style={styles.paragraph}>
      RWAUSD is a stable token locked for four years, designed to minimize price
      volatility by being pegged to a stable asset such as USD.
    </p>
    <p>Total Supply = 500 Billion (No capping/Locking of stable coin supply)</p>
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
        <RWAInvestment/>
        <WhatIsRWA />
        <StableToken/>
        <HowItWorks />
      </section>
    </div>
  );
};

// Define your styles
const styles = {
  investmentContainer: {
    padding: "3rem 2rem",
    backgroundColor: "#1A2F45",
    color: "#FFFFFF",
    textAlign: "center",
  },
  investmentTitle: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#F0C419",
    marginBottom: "2rem",
  },
  investmentSubtitle: {
    fontSize: "1.8rem",
    fontWeight: "400",
    color: "#E0E0E0",
    marginBottom: "2rem",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  investmentCard: {
    backgroundColor: "#203C5E",
    padding: "2rem",
    borderRadius: "12px",
    width: "320px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "2.2rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1rem",
  },
  cardDescription: {
    fontSize: "1.4rem",
    fontWeight: "400",
    color: "#E0E0E0",
    marginBottom: "1.5rem",
  },
  cardList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.2rem",
  },
  cardListItem: {
    marginBottom: "0.7rem",
    backgroundColor: "#2D4F6C", // Lighter shade for better contrast
    color: "#F0F0F0", // Light color for readability
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease", // For hover effect
  },
  cardListItemHover: {
    backgroundColor: "#F0C419", // Highlight color on hover
    color: "#203C5E", // Darker text on hover
  },
  stakingContainer: {
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "#203C5E",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    width:"45%"
  },
  stakingTitle: {
    fontSize: "2.4rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1rem",
  },
  stakingDetails: {
    fontSize: "1.4rem",
    color: "#E0E0E0",
    marginBottom: "1.5rem",
  },
  stakingList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.2rem",
  },
  stakingListItem: {
    marginBottom: "0.7rem",
    backgroundColor: "#2D4F6C", // Lighter background for staking list items
    color: "#F0F0F0",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease", // Hover effect for staking list
  },
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
    fontSize: "2.2rem",
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
