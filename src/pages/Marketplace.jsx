/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coin, nft, stable } from "../assets/images";
import { dummyProducts } from "../assets/dummy";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Alert,
} from "@mui/material";
import { useSelector } from "react-redux";
import "../styles/Marketplace.css"; // Import the CSS file

export const stakeCoins = [];

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
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState(
    location.state?.activeSection || "Coins"
  );
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState(""); // "buy" or "stake"
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [units, setUnits] = useState(0);
  const [currency, setCurrency] = useState("USDT");
  const [stakeTime, setStakeTime] = useState(1); // For staking years
  const [alert, setAlert] = useState({ type: "", message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const approvedProducts = await getApprovedProducts();
      setProducts(approvedProducts);
    };
    loadProducts();
  }, []);

  const handleDialogOpen = (type, product) => {
    if (!isLoggedIn) {
      setAlert({ type: "error", message: "Log in for Investing!" });
      return;
    }
    if (!product) {
      setAlert({ type: "error", message: "Product not found!" });
      return;
    }
    setDialogType(type);
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const goToStaking = () => {
    navigate("/dashboard", { state: { currentPage: "Staking" } });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setUnits(0);
    setCurrency("USDT");
    setStakeTime(1);
    setSelectedProduct(null);
  };

  const handleProductClick = (id, category) => {
    if (!isLoggedIn) {
      setAlert({ type: "error", message: "LOG IN BEFORE INVESTMENT" });
      return;
    }

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
          amount: "$0.045",
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

  const handleStake = () => {
    if (!selectedProduct || !selectedProduct.amount) {
      setAlert({ type: "error", message: "Invalid product or amount." });
      return;
    }

    const userBalance = JSON.parse(localStorage.getItem("userBalance")) || {};
    const cost = units * selectedProduct.amount;

    if (userBalance[currency] >= cost) {
      userBalance[currency] -= cost;
      localStorage.setItem("userBalance", JSON.stringify(userBalance));

      if (selectedProduct.category === "Coin") {
        const newStakedCoin = {
          id: selectedProduct.id,
          name: selectedProduct.name,
          amount: units,
          purchaseDate: new Date(),
          lockTime: stakeTime,
        };
        localStorage.setItem(
          "stakedCoins",
          JSON.stringify([...stakedCoins, newStakedCoin])
        );
      } else {
        const newStakedNFT = {
          id: selectedProduct.id,
          name: selectedProduct.name,
          units,
          purchaseDate: new Date(),
          lockTime: stakeTime,
        };
        localStorage.setItem(
          "stakeNFTs",
          JSON.stringify([...purchasedNFTs, newStakedNFT])
        );
      }

      setAlert({ type: "success", message: "Staking successful!" });
    } else {
      setAlert({ type: "error", message: "Insufficient balance!" });
    }

    handleDialogClose();
  };

  const handleBuy = () => {
    if (!selectedProduct || !selectedProduct.amount) {
      setAlert({ type: "error", message: "Invalid product or amount." });
      return;
    }
    const userBalance = JSON.parse(localStorage.getItem("userBalance")) || {};
    const cost = units * selectedProduct.amount;

    if (userBalance[currency] >= cost) {
      userBalance[currency] -= cost;
      localStorage.setItem("userBalance", JSON.stringify(userBalance));
      setAlert({ type: "success", message: "Purchase successful!" });
    } else {
      setAlert({ type: "error", message: "Insufficient balance!" });
    }

    handleDialogClose();
  };

  const filteredProducts = filterProducts(activeSection);

  const renderCoinButtons = (product) => (
    <div className="button-group">
      <button
        className="staking-button"
        onClick={() => handleDialogOpen("buy", product)}
      >
        Buy
      </button>
      <button
        className="staking-button"
        onClick={() => handleDialogOpen("stake", product)}
      >
        Stake
      </button>
    </div>
  );

  return (
    <div className="marketplace-container">
      <header className="marketplace-header">
        <button className="staking-button" onClick={goToStaking}>
          Go to Your Staking
        </button>
      </header>

      <div className="nav-tabs">
        <span
          className={activeSection === "Coins" ? "active-tab" : ""}
          onClick={() => setActiveSection("Coins")}
        >
          Coins
        </span>
        <span
          className={activeSection === "NFTs" ? "active-tab" : ""}
          onClick={() => setActiveSection("NFTs")}
        >
          NFTs
        </span>
        <span
          className={activeSection === "Investments" ? "active-tab" : ""}
          onClick={() => setActiveSection("Investments")}
        >
          Investments
        </span>
      </div>
      {alert.message && <Alert severity={alert.type}>{alert.message}</Alert>}

      <main className="marketplace-main">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id, product.category)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-description">{product.amount}</div>
              {activeSection === "Coins" && renderCoinButtons(product)}
            </div>
          ))}
        </div>
      </main>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {dialogType === "buy" ? "Buy Coin" : "Stake Coin"}
        </DialogTitle>
        <DialogContent>
          <input
            type="number"
            placeholder="Units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            min="1"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USDT">USDT</option>
            <option value="BNB">BNB</option>
            <option value="RWAToken">RWAToken</option>
          </select>

          {dialogType === "stake" && selectedProduct?.name === "RWA Token" && (
            <select
              value={stakeTime}
              onChange={(e) => setStakeTime(e.target.value)}
            >
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
            </select>
          )}
          {dialogType === "stake" && selectedProduct?.name === "RWA USD" && (
            <p>4-year staking only</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            onClick={dialogType === "buy" ? handleBuy : handleStake}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Marketplace;
