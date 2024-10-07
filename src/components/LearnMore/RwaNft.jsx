/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Grid } from "@mui/material";

// Card Component for Each NFT Sector
const NFTSectorCard = ({ title, description, benefits, details }) => (
  <Card style={styles.investmentCard}>
    <CardContent>
      <Typography variant="h5" style={styles.cardTitle}>
        {title}
      </Typography>
      <Typography variant="body1" style={styles.cardDescription}>
        {description}
      </Typography>
      <Typography variant="body2" style={styles.cardBenefits}>
        <strong>Benefits:</strong> {benefits}
      </Typography>
      <ul style={styles.cardList}>
        {details.map((detail, index) => (
          <li key={index} style={styles.cardListItem}>
            {detail}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// RWANFT Sectors Overview Section
const RWANFTOverview = () => {
  const nftSectors = [
    {
      title: "Fashion",
      description:
        "NFTs in fashion represent digital ownership of designer clothing, accessories, and fashion-related intellectual property.",
      benefits:
        "Provides liquidity to fashion brands, enhances brand visibility, enables digital ownership of limited editions, and opens new revenue streams through virtual fashion.",
      details: [
        "Designer Clothing",
        "Luxury Accessories",
        "Streetwear",
        "Vintage Fashion",
        "Fashion Photography",
        "Virtual Fashion",
        "Fashion Shows and Runway Events",
      ],
    },
    {
      title: "Art Collection",
      description:
        "NFTs in art collection digitize artworks, offering ownership and provenance verification on blockchain. They range from digital art to traditional masterpieces.",
      benefits:
        "Democratizes art ownership, ensures authenticity, reduces transaction costs, and empowers artists with royalties and resale rights.",
      details: [
        "Digital Art",
        "Traditional Artworks",
        "Photography",
        "Street Art",
        "3D Art",
        "Illustrations",
        "Virtual Exhibitions",
      ],
    },
    {
      title: "Cold Storage",
      description:
        "NFTs in cold storage represent ownership or usage rights in secure cold storage facilities for perishable goods like food and pharmaceuticals.",
      benefits:
        "Improves supply chain transparency, ensures quality control, and enhances product traceability.",
      details: [
        "Perishable Food Storage",
        "Pharmaceuticals and Vaccines",
        "Frozen Foods",
        "Agricultural Produce",
        "Cold Chain Logistics",
      ],
    },
    {
      title: "Education",
      description:
        "NFTs in education involve digital certificates, course materials, and virtual learning environments, enhancing educational access and credential verification.",
      benefits:
        "Facilitates lifelong learning, verifies skills and achievements, and enables global education access.",
      details: [
        "Primary and Secondary Education",
        "Higher Education",
        "Online and Distance Learning",
        "STEM Education",
        "Corporate Training",
      ],
    },
    {
      title: "Healthcare",
      description:
        "Healthcare NFTs tokenize medical records and health-related data, ensuring secure sharing, interoperability, and improved patient outcomes.",
      benefits:
        "Enhances data security and privacy, streamlines healthcare processes, and facilitates personalized medicine.",
      details: [
        "Telemedicine and Telehealth",
        "Electronic Health Records (EHR)",
        "Clinical Trials and Research",
        "Medical Imaging and Diagnostics",
        "Healthcare Payments and Billing",
      ],
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>RWA NFT (Non-Fungible Token) Package</h2>
      <Grid container spacing={3}>
        {nftSectors.map((sector, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NFTSectorCard {...sector} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

// Main LearnMore Section
const RWANFT = () => {
  return (
    <div style={styles.pageContainer}>
      <RWANFTOverview />
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
    fontWeight: "600", // Medium emphasis for section headings
    color: "#F0C419",
    marginBottom: "1.5rem",
  },
  investmentCard: {
    backgroundColor: "#1A2F45",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)", // Stronger shadow for more depth
    marginBottom: "2.5rem",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    color: "#F0C419",
    marginBottom: "1rem",
  },
  cardDescription: {
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#E0E0E0",
    marginBottom: "1rem",
  },
  cardBenefits: {
    fontSize: "1rem",
    fontWeight: "400",
    color: "#E0E0E0",
    marginBottom: "1rem",
  },
  cardList: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1rem",
  },
  cardListItem: {
    marginBottom: "0.7rem",
    backgroundColor: "#2D4F6C", // Lighter shade for better contrast
    color: "#F0F0F0", // Light color for readability
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease", // For hover effect
  },
};

export default RWANFT;
