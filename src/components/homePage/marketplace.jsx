import React from "react";
import { useNavigate } from "react-router-dom";
import { coin, nft, stable, logo } from "../../assets/images";

const Marketplace = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/marketplace");
  };

  return (
    <section
      style={{
        padding: "40px 40px",
        backgroundColor: "#12141d",
        color: "#ffffff",
        fontFamily: "Roboto, sans-serif",
        margin: "0 auto",
        maxWidth: "90%",
        textAlign: "center",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Explore Our Marketplace
      </h2>
      <p
        style={{
          marginBottom: "30px",
          color: "#b0b0b0",
          fontSize: "18px",
        }}
      >
        Discover unique digital assets in our NFT marketplace.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          width: "100%",
          padding: "10px 0",
          justifyItems: "center",
        }}
      >
        {[logo, nft, stable, coin].map((image, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "250px",
              backgroundColor: "#1f222d",
              borderRadius: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src={image}
              alt={`NFT ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleExplore}
        style={{
          marginTop: "30px",
          padding: "12px 28px",
          backgroundColor: "#ff6347",
          color: "#ffffff",
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e5533d";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ff6347";
        }}
      >
        Explore all
      </button>
    </section>
  );
};

export default Marketplace;
