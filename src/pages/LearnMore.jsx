import YouTubeIcon from "@mui/icons-material/YouTube"; // Material UI YouTube icon

const IntroSection = () => (
  <section style={styles.section}>
    <h1 style={styles.mainTitle}>Get to Know WRA and RWA</h1>
    <p style={styles.paragraph}>
      Welcome to the world of WRA (Wealth Real Assets) and RWA (Real World
      Assets). These innovative platforms are designed to bridge the gap between
      traditional assets and digital transformation. By leveraging blockchain
      technology, we aim to bring transparency, security, and access to a wide
      range of financial tools. It&apos;s a great opportunity!
    </p>
  </section>
);

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

const TechnicalRoadmap = () => (
  <section style={styles.card}>
    <h2 style={styles.sectionTitle}>
      Technical Roadmap: Milestones and Whats Next
    </h2>
    <div style={styles.roadmapStep}>
      <h3 style={styles.roadmapTitle}>Q1 2024: Launch</h3>
      <p style={styles.paragraph}>
        Launch of the WRA platform with initial asset offerings.
      </p>
    </div>
    <div style={styles.roadmapStep}>
      <h3 style={styles.roadmapTitle}>Q2 2024: DEX Integration</h3>
      <p style={styles.paragraph}>
        Integration with decentralized exchanges to enhance liquidity.
      </p>
    </div>
    <div style={styles.roadmapStep}>
      <h3 style={styles.roadmapTitle}>Q3 2024: Staking and Yield</h3>
      <p style={styles.paragraph}>
        Introduction of staking and yield farming for RWA-backed assets.
      </p>
    </div>
    <div style={styles.roadmapStep}>
      <h3 style={styles.roadmapTitle}>Q4 2024: Partnerships</h3>
      <p style={styles.paragraph}>
        Expansion of partnerships with institutional investors.
      </p>
    </div>
  </section>
);

const YouTubeSection = () => (
  <section style={styles.youtubeSection}>
    <h2 style={styles.sectionTitle}>Learn More: WRA and RWA on YouTube</h2>
    <p style={styles.paragraph}>
      Stay informed by visiting our YouTube channel. Watch insightful videos
      that cover the full spectrum of WRA and RWA, from beginner guides to
      advanced tutorials on how to make the most of your investments.
    </p>
    <button style={styles.youtubeButton}>
      <YouTubeIcon style={styles.youtubeIcon} />
      Watch Now on YouTube
    </button>
  </section>
);

const LearnMore = () => (
  <div style={styles.pageContainer}>
    <IntroSection />
    <WhatIsWRA />
    <WhatIsRWA />
    <HowItWorks />
    <TechnicalRoadmap />
    <YouTubeSection />
  </div>
);

const styles = {
  pageContainer: {
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(to bottom, #203C5E, #8B6F56)",
    color: "#FFFFFF",
    padding: "0 20px",
    textAlign: "center",
  },
  section: {
    padding: "3rem 0",
  },
  mainTitle: {
    fontSize: "3.2rem",
    fontWeight: "700", // Emphasize title
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "2.8rem",
    fontWeight: "600", // Medium emphasis for section headings
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  paragraph: {
    fontSize: "1.2rem", // Increase font size slightly
    fontWeight: "400", // Standard weight for readability
    lineHeight: "1.7",
    marginBottom: "2rem",
  },
  card: {
    backgroundColor: "#1A2F45",
    padding: "2.5rem", // Increase padding
    borderRadius: "12px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)", // Stronger shadow for more depth
    marginBottom: "2.5rem", // More spacing between sections
    maxWidth: "800px",
    margin: "auto",
    marginTop: "10px",
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
    marginBottom: "0.7rem", // Add spacing between list items
    color: "#F0C419",
    fontWeight: "500",
    backgroundColor: "rgba(25, 155, 250, 0.1)",
  },
  bullet: {
    fontSize: "1.4rem", // Slightly larger bullets
    marginRight: "0.5rem",
    color: "#F0C419",
  },
  roadmapStep: {
    marginBottom: "1.5rem",
    textAlign: "left",
  },
  roadmapTitle: {
    fontSize: "1.6rem", // Increased size for roadmap subheadings
    color: "#F0C419",
  },
  youtubeSection: {
    padding: "2rem",
    textAlign: "center",
  },
  youtubeButton: {
    backgroundColor: "#F0C419",
    padding: "1rem 2.5rem", // Larger button
    fontSize: "1.3rem", // Slightly larger font size
    color: "#203C5E",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center", // Align text and icon in the center
  },
  youtubeIcon: {
    fontSize: "2rem", // Larger icon size
    marginRight: "1rem",
  },
};

export default LearnMore;
