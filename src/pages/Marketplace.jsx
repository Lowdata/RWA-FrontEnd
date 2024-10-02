import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coin, nft, stable } from "../assets/images";
import { dummyProducts } from "../assets/dummy";

// Color scheme from your image (example colors)
const colors = {
  background: "#2C3E50", // Dark background
  cardBackground: "#1A252F", // Slightly darker for card
  primary: "#E67E22", // Orange-gold tone for buttons, active state
  textPrimary: "#FFFFFF", // White text
  textSecondary: "#BDC3C7", // Lighter gray text
  border: "#34495E", // Border color for elements
};

// Marketplace styling
const marketplaceStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: colors.background,
    color: colors.textPrimary,
  },
  main: {
    flex: 1,
    padding: "20px",
    animation: "fadeIn 0.6s ease-out", // Fade-in effect for content
  },
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    textAlign: "center",
    position: "sticky",
    bottom: 0,
    width: "100%",
    color: colors.textPrimary,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    transition: "background-color 0.4s, padding 0.4s", // Smooth header animation
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    "@media (maxWidth: 800px)": {
      gridTemplateColumns: "repeat(2, 1fr)", // Adjust for smaller screens
    },
    "@media (maxWidth: 500px)": {
      gridTemplateColumns: "repeat(1, 1fr)", // Single column for very small screens
    },
  },
  productCard: {
    border: `1px solid ${colors.border}`,
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: colors.cardBackground,
    color: colors.textPrimary,
    cursor: "default",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition:
      "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
    transform: "translateY(0)",
  },
  productCardHover: {
    transform: "translateY(-10px)", // Smoother hover transition
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
  productImage: {
    width: "80%",
    borderRadius: "10px",
    transition: "transform 0.4s ease", // Smooth image hover
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "15px",
    color: colors.textPrimary,
  },
  productDescription: {
    fontSize: "14px",
    color: colors.textSecondary,
    marginTop: "10px",
  },
  stakingButton: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: colors.primary,
    color: colors.textPrimary,
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    gap: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  stakingButtonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Subtle hover effect
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "10px",
    "@media (maxwidth: 600px)": {
      flexDirection: "column", // Stack buttons on smaller screens
      alignItems: "center",
    },
  },
  navTabs: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px",
    cursor: "default",
    gap: "20px",
    padding: "20px",
  },
  activeTab: {
    fontWeight: "bold",
    color: colors.primary,
    borderBottom: `2px solid ${colors.primary}`,
  },
};

// Adding keyframes dynamically using <style> tag
const addGlobalStyles = () => {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes buttonPress {
      0% { transform: scale(1); }
      50% { transform: scale(0.95); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(styleTag); // Append the styles to the document's head
};



export const getApprovedProducts = async () => {
  try {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/products",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();

    const approvedProducts = data.products
      .filter((product) => product.status === "Approved")
      .map((product) => ({
        id: product.id,
        name: product.productName,
        image: product.image || getFallbackImage(product),
        description: product.description || "No description available.",
        category: product.category,
        amount: product.amount || "N/A",
      }));

    return [...approvedProducts, ...dummyProducts];
  } catch (error) {
    console.error("Error fetching products:", error);
    return dummyProducts;
  }
};

const getFallbackImage = (product) => {
  switch (product.category) {
    case "Coin":
      return coin;
    case "NFT":
      return nft;
    case "Stablecoin":
      return stable;
    default:
      return coin;
  }
};

const Marketplace = () => {
  const [products, setProducts] = useState([]);
   const [activeSection, setActiveSection] = useState(
     location.state?.activeSection || "Coins"
   );
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const approvedProducts = await getApprovedProducts();
      setProducts(approvedProducts);
    };
    loadProducts();
    addGlobalStyles(); // Add keyframes on load
  }, []);

  const handleProductClick = (id, category) => {
    if (category !== "Coin") {

      navigate(`/nft/${id}`, { state: { activeSection } });
    }
  };

  const filterProducts = (section) => {
    if (section === "Coins") {
      return [
        {
          id: 2001,
          name: "RWA Token",
          image: coin,
          description: "RWA native token for ecosystem growth and staking.",
          category: "Coin",
          amount: "$10",
          raised: 3000,
          stakeOptions: [1, 2, 3, 4],
        },
        {
          id: 2002,
          name: "RWA USD",
          image: stable,
          description:
            "RWA stablecoin backed by assets for secure transactions.",
          category: "Coin",
          amount: "$1",
          raised: 5000,
          stakeOptions: [4],
        },
      ];
    }

    switch (section) {
      case "NFTs":
        return products.filter((product) => product.amount < 10000000);
      case "Investments":
        return products.filter((product) => product.amount >= 10000000);
      default:
        return products;
    }
  };

  const handleStake = (tokenName, stakeOptions) => {
    console.log(`Staking ${tokenName}...`);
    const selectedOption = window.prompt(
      `Select staking period for ${tokenName} (${stakeOptions.join(
        ", "
      )} years):`
    );
    if (selectedOption && stakeOptions.includes(Number(selectedOption))) {
      console.log(`Staking ${tokenName} for ${selectedOption} year(s)`);
    } else {
      alert("Invalid selection.");
    }
  };

  const handleBuy = (tokenName) => {
    console.log(`Buying ${tokenName}...`);
  };

  const goToStaking = () => {
    navigate("/dashboard", { state: { currentPage: "Staking" } });
  };

  const filteredProducts = filterProducts(activeSection);

  const renderCoinButtons = (product) => (
    <div style={marketplaceStyles.buttonGroup}>
      <button
        style={marketplaceStyles.stakingButton}
        onMouseEnter={(e) =>
          Object.assign(
            e.currentTarget.style,
            marketplaceStyles.stakingButtonHover
          )
        }
        onMouseLeave={(e) =>
          Object.assign(e.currentTarget.style, marketplaceStyles.stakingButton)
        }
        onClick={() => handleBuy(product.name)}
      >
        Buy
      </button>
      <button
        style={marketplaceStyles.stakingButton}
        onMouseEnter={(e) =>
          Object.assign(
            e.currentTarget.style,
            marketplaceStyles.stakingButtonHover
          )
        }
        onMouseLeave={(e) =>
          Object.assign(e.currentTarget.style, marketplaceStyles.stakingButton)
        }
        onClick={() => handleStake(product.name, product.stakeOptions)}
      >
        Stake
      </button>
    </div>
  );

  return (
    <div style={marketplaceStyles.container}>
      <header style={marketplaceStyles.header}>
        <button style={marketplaceStyles.stakingButton} onClick={goToStaking}>
          Go to Your Staking
        </button>
      </header>

      <div style={marketplaceStyles.navTabs}>
        <span
          style={activeSection === "Coins" ? marketplaceStyles.activeTab : {}}
          onClick={() => setActiveSection("Coins")}
        >
          Coins
        </span>
        <span
          style={activeSection === "NFTs" ? marketplaceStyles.activeTab : {}}
          onClick={() => setActiveSection("NFTs")}
        >
          NFTs
        </span>
        <span
          style={
            activeSection === "Investments" ? marketplaceStyles.activeTab : {}
          }
          onClick={() => setActiveSection("Investments")}
        >
          Investments
        </span>
      </div>

      <main style={marketplaceStyles.main}>
        <div style={marketplaceStyles.productGrid}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={marketplaceStyles.productCard}
              onClick={() => handleProductClick(product.id, product.category)}
              onMouseEnter={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  marketplaceStyles.productCardHover
                )
              }
              onMouseLeave={(e) =>
                Object.assign(
                  e.currentTarget.style,
                  marketplaceStyles.productCard
                )
              }
            >
              <img
                src={product.image}
                alt={product.name}
                style={marketplaceStyles.productImage}
              />
              <div style={marketplaceStyles.productName}>{product.name}</div>
              <div style={marketplaceStyles.productDescription}>
                {product.amount}
              </div>
              {activeSection === "Coins" && renderCoinButtons(product)}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
