import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { coin, nft, stable } from "../assets/images";


const marketplaceStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  main: {
    flex: 1,
    padding: "20px",
  },
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    textAlign: "center",
    position: "sticky",
    bottom: 0,
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchBar: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    transition: "transform 0.2s, box-shadow 0.3s ease", // Smooth hover effect
    transform: "translateY(0)", // Reset translate to none initially
  },
  productCardHover: {
    transform: "translateY(-5px)", // Slight lift when hovering
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
  },
  productImage: {
    width: "80%",
    borderRadius: "10px",
    transition: "transform 0.2s ease", // Smooth image scale effect on hover
  },
  productName: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  productDescription: {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  },
  stakingButton: {
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#0066cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

const dummyProducts = [
  {
    id: 1001,
    name: "Crypto Coin Alpha",
    image: coin,
    description: `Crypto Coin Alpha is a pioneering cryptocurrency that aims to redefine the financial landscape by offering a decentralized, secure, and scalable digital currency solution. Built on the cutting-edge principles of blockchain technology, Crypto Coin Alpha is more than just a digital asset; it represents the future of decentralized finance (DeFi). The coin is designed to operate on a high-performance blockchain platform that allows for fast transactions and minimal fees. By using advanced cryptographic techniques, it ensures the highest levels of security and privacy for users, allowing them to conduct transactions with complete confidence. 

The future of decentralized currency lies in the ability to remove intermediaries such as banks and financial institutions from the equation, empowering individuals and businesses to manage their own finances directly. Crypto Coin Alpha enables peer-to-peer transactions, which can be executed almost instantaneously, regardless of the geographical location of the parties involved. This eliminates the delays and costs associated with traditional banking systems.

Furthermore, Crypto Coin Alpha is built with scalability in mind, ensuring that it can handle a growing number of users and transactions without compromising performance. This makes it ideal for mass adoption, as it has the potential to become a leading cryptocurrency in the global market. With its deflationary model, where the total supply is limited, Crypto Coin Alpha is positioned as a valuable long-term investment. As demand grows and the supply remains fixed, the value of each coin is expected to increase over time.

Crypto Coin Alpha also has a unique governance model that allows token holders to participate in decision-making processes related to the future development of the platform. This decentralized governance ensures that the community has a say in the direction of the project, making it a truly community-driven cryptocurrency. Whether you're an investor, a trader, or simply someone who believes in the potential of decentralized finance, Crypto Coin Alpha offers a secure, innovative, and promising solution for the future of money.`,
    category: "Coin",
    amount: 10000000000000,
    raised: 2000,
  },
  {
    id: 1002,
    name: "Virtual NFT Art #1",
    image: nft,
    description: `Virtual NFT Art #1 is a groundbreaking digital artwork that represents a new era in the world of art and collectibles. As part of an exclusive digital art collection, this NFT (non-fungible token) is more than just a piece of visual art—it is a symbol of the fusion between creativity and blockchain technology. NFTs have revolutionized the art world by providing artists with a way to tokenize their creations, ensuring that each piece is unique, verifiable, and immutable on the blockchain.

This particular NFT is a one-of-a-kind masterpiece that combines traditional artistic techniques with cutting-edge digital design. The artwork has been meticulously crafted by a renowned digital artist, whose works have been exhibited in both physical galleries and virtual spaces across the globe. Virtual NFT Art #1 is not just an image but a piece of interactive art that evolves over time, reflecting the dynamic nature of digital expression.

The NFT itself serves as proof of ownership, allowing collectors to own a unique digital asset that cannot be duplicated or forged. Each NFT is stored on the blockchain, providing a transparent and tamper-proof record of ownership. This makes it possible for collectors to buy, sell, and trade digital artworks in a way that was never possible before. Virtual NFT Art #1 is a true collectible, with rarity and exclusivity that ensures its value will appreciate over time.

For art lovers and collectors, this NFT represents the perfect blend of art and technology. It offers the opportunity to own a piece of history—a work of art that captures the zeitgeist of the digital age. Whether you are a seasoned collector or a newcomer to the world of NFTs, Virtual NFT Art #1 is a must-have addition to any digital art collection.`,
    category: "NFT",
    amount: 5000000000,
    raised: 2500,
  },
  {
    id: 1003,
    name: "Stable Asset Gold",
    image: stable,
    description: `Stable Asset Gold is a stablecoin backed by physical gold reserves, offering a secure and reliable store of value in the volatile world of cryptocurrencies. Stablecoins are designed to maintain a stable value, making them ideal for everyday transactions and long-term investments. What sets Stable Asset Gold apart is that each token is pegged to the value of gold, one of the most trusted and enduring assets in human history.

The gold reserves that back Stable Asset Gold are stored in secure vaults, audited regularly to ensure transparency and accountability. This makes Stable Asset Gold a stable and trustworthy digital asset, combining the best aspects of traditional finance with the innovations of blockchain technology. For investors looking to hedge against the volatility of the crypto market, Stable Asset Gold offers a way to preserve wealth while still benefiting from the advantages of digital currencies.

Gold has been a symbol of wealth and stability for thousands of years, and now, with Stable Asset Gold, it is possible to own and trade gold in the form of a digital token. Unlike physical gold, which requires secure storage and can be cumbersome to trade, Stable Asset Gold allows for seamless, instant transactions on the blockchain. Whether you're making a purchase, sending money to a friend, or simply holding onto your tokens as an investment, Stable Asset Gold offers the stability and security you need.

In an age of economic uncertainty, Stable Asset Gold provides a way to protect your assets and ensure financial security. As the value of fiat currencies fluctuates and inflation rises, gold remains a reliable store of value. Stable Asset Gold gives you the ability to access the benefits of gold ownership without the challenges associated with physical gold. With its strong backing and transparent operations, Stable Asset Gold is the perfect choice for those seeking a stable and secure digital asset.`,
    category: "Stablecoin",
    amount: 2000000000,
    raised: 1000,
  },
  {
    id: 1004,
    name: "Digital Collectible NFT #2",
    image: nft,
    description: `Digital Collectible NFT #2 is a limited-edition NFT collectible that represents the cutting edge of the digital collectibles market. NFTs, or non-fungible tokens, are unique digital assets that are stored on the blockchain, and they have taken the world by storm as a new way to collect and trade digital goods. Digital Collectible NFT #2 is part of an exclusive series of digital artworks that have been carefully curated to appeal to collectors and investors alike.

This particular NFT is a rare piece, with only a limited number of copies available. The scarcity of the collectible adds to its value, making it a sought-after item for both novice and experienced collectors. The artwork itself is a stunning example of digital craftsmanship, combining vibrant colors, intricate designs, and a sense of movement that draws the viewer in. Created by a talented digital artist, Digital Collectible NFT #2 is more than just a static image—it is a work of art that captures the imagination and showcases the limitless possibilities of digital creation.

One of the most exciting aspects of owning an NFT is the ability to prove ownership and authenticity. Each NFT is recorded on the blockchain, providing an immutable and transparent record of ownership. This ensures that Digital Collectible NFT #2 is a truly unique asset that cannot be replicated or forged. As the world of digital collectibles continues to grow, NFTs like this one are becoming increasingly valuable as collectors seek to acquire rare and exclusive items.

For those looking to invest in the future of digital art and collectibles, Digital Collectible NFT #2 offers an opportunity to own a piece of the next generation of art. Whether you're a seasoned collector or new to the world of NFTs, this digital collectible is a valuable addition to any collection.`,
    category: "NFT",
    amount: 12000000,
    raised: 2000,
  },
  {
    id: 1005,
    name: "Rare Art Piece #99",
    image: nft,
    description: `Rare Art Piece #99 is a one-of-a-kind NFT that represents the pinnacle of digital art and collectible culture. This exclusive piece is part of a series of rare NFTs created by a renowned artist whose works have become highly sought after in the digital art community. Rare Art Piece #99 is more than just a visual artwork—it is a statement on the nature of ownership, value, and creativity in the digital age.

The artwork itself is a breathtaking fusion of traditional artistic techniques and modern digital design. With its bold colors, intricate details, and evocative themes, Rare Art Piece #99 captures the essence of the artist's unique style. Each element of the artwork has been carefully crafted to convey a sense of depth, meaning, and emotion, making it a truly immersive experience for the viewer.

As an NFT, Rare Art Piece #99 is stored on the blockchain, providing a secure and transparent record of ownership. This ensures that the piece is a genuine, unique creation that cannot be copied or forged. For collectors, this adds an extra layer of value to the artwork, as the rarity and exclusivity of the NFT make it a highly desirable item in the world of digital collectibles.

Rare Art Piece #99 is more than just a digital file—it is a piece of history. As NFTs continue to reshape the way we think about art and ownership, pieces like this one are becoming valuable assets in their own right. Whether you're a passionate art collector or an investor looking to capitalize on the growing NFT market, Rare Art Piece #99 offers a unique opportunity to own a work of art that is both visually stunning and culturally significant.`,
    category: "NFT",
    amount: 30000000,
    raised: 2000,
  },
];

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
  const navigate = useNavigate();

    

  useEffect(() => {
    const loadProducts = async () => {
      const approvedProducts = await getApprovedProducts();
      setProducts(approvedProducts);
    };

    loadProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/nft/${id}`);
  };

  const goToStaking = () => {
    navigate("/dashboard", { state: { currentPage: "Staking" } });
  };

  return (
    <div style={marketplaceStyles.container}>
      <header style={marketplaceStyles.header}>
        <input
          type="text"
          placeholder="Search"
          style={marketplaceStyles.searchBar}
        />
      </header>
      <main style={marketplaceStyles.main}>
        <div style={marketplaceStyles.productGrid}>
          {products.map((product) => (
            <div
              key={product.id}
              style={marketplaceStyles.productCard}
              onClick={() => handleProductClick(product.id)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  marketplaceStyles.productCardHover.transform)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform =
                  marketplaceStyles.productCard.transform)
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
            </div>
          ))}
        </div>
        {/* Add the Go to Staking button */}
        <button style={marketplaceStyles.stakingButton} onClick={goToStaking}>
          Go to Your Staking
        </button>
      </main>
      <footer style={marketplaceStyles.footer}>
        <p>© 2024 Real World Asset Corp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;
