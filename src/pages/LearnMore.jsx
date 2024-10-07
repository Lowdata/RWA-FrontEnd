/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Grid } from "@mui/material";
import RWANFT from "../components/LearnMore/RwaNft";
import Coin from "../components/LearnMore/Coins"

// Intro Section
const RWAInvestmentIntro = () => (
  <section style={styles.section}>
    <h1 style={styles.mainTitle}>RWA Investment</h1>
    <p style={styles.paragraph}>
      Real World Asset Investment involves allocating capital to tangible assets
      that exist in the physical world. The goal is to diversify portfolios and
      achieve stable, long-term returns by investing in a variety of asset
      classes.
    </p>
  </section>
);

// Card Component for Each Sector
const InvestmentSectorCard = ({ title, description, benefits, details }) => (
  <Card style={styles.investmentCard}>
    <CardContent>
      <Typography variant="h5" style={styles.cardTitle}>
        {title}
      </Typography>
      <Typography variant="body1" style={styles.cardDescription}>
        {description}
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

// Investment Sectors Overview Section
const InvestmentSectorsOverview = () => {
  const sectors = [
    {
      title: "Real Estate",
      description:
        "Investing in residential, commercial, and industrial properties.",
      benefits:
        "Steady cash flow, property value appreciation, and portfolio diversification.",
      details: [
        "Housing",
        "Township",
        "Commercial Malls",
        "High-end Apartments",
        "Office Spaces",
        "Industrial Properties",
        "Agricultural Land",
        "Retail Spaces",
        "Mixed-use Developments",
        "Hospitality Properties",
        "Land Investments",
        "Student Housing",
        "Senior Living",
        "Vacation Properties",
      ],
    },
    {
      title: "Commodities",
      description:
        "Investing in physical goods such as gold, silver, oil, and agricultural products.",
      benefits:
        "Hedge against inflation, portfolio diversification, and high liquidity.",
      details: [
        "Precious Metals",
        "Industrial Metals",
        "Energy Commodities",
        "Agricultural Products",
        "Livestock",
        "Soft Commodities",
        "Forestry Products",
        "Minerals",
        "Renewable Energy Resources",
        "Water Resources",
        "Base Materials",
        "Fertilizers",
      ],
    },
    {
      title: "Fine Art and Collectibles",
      description:
        "Investing in artworks, antiques, and rare items. Potential for significant appreciation, cultural value, and aesthetic pleasure.",
      benefits: "Cultural value, potential for appreciation.",
      details: [
        "Fine Art",
        "Antiques",
        "Rare Books and Manuscripts",
        "Coins and Currency",
        "Stamps",
        "Vintage and Classic Cars",
        "Jewelry",
        "Luxury Watches",
      ],
    },
    {
      title: "Trade Finance",
      description: "Providing capital for international trade transactions.",
      benefits:
        "Short-term investment, reduced risk through trade credit insurance, and high returns.",
      details: [
        "Letters of Credit",
        "Trade Credit Insurance",
        "Export Financing",
        "Import Financing",
        "Supply Chain Financing",
      ],
    },
    {
      title: "Carbon Credits",
      description:
        "Investing in carbon reduction projects to earn carbon credits.",
      benefits: "Environmental impact, potential for appreciation.",
      details: [
        "Renewable Energy Projects",
        "Afforestation and Reforestation",
        "Energy Efficiency Projects",
        "Methane Capture Projects",
      ],
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Investment Sectors Overview</h2>
      <Grid container spacing={3}>
        {sectors.map((sector, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <InvestmentSectorCard {...sector} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

// Main LearnMore Section
const LearnMore = () => {
  return (
    <div style={styles.pageContainer}>
      <RWAInvestmentIntro />
      <InvestmentSectorsOverview />
      <RWANFT/>
      <Coin/>
    </div>
  );
};

// Styles
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
    marginBottom: "1.5rem",
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

export default LearnMore;
