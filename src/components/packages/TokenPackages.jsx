import React from "react";

const tokenPackages = [
  { name: "$50 Package", cv: "40%" },
  { name: "$100 Package", cv: "40%" },
  { name: "$300 Package", cv: "40%" },
  { name: "$500 Package", cv: "40%" },
  { name: "$2500 Package", cv: "40%" },
  { name: "$5000 Package", cv: "40%" },
  { name: "$10000 Package", cv: "40%" },
];

const TokenPackages = () => {
  const sectionStyle = {
    margin: "20px auto",
    padding: "20px",
    color: "#f0f0f0",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#27293d",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: "#fdd835" }}>RWA Token Packages</h2>
      <div style={gridStyle}>
        {tokenPackages.map((pkg, index) => (
          <div key={index} style={cardStyle}>
            <h3>{pkg.name}</h3>
            <p>CV: {pkg.cv}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TokenPackages;
