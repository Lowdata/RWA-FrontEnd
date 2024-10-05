

const InvestmentPackage = () => {
  const sectionStyle = {
    margin: "20px auto",
    padding: "30px",
    backgroundColor: "#20232a", // Darker matte background
    borderRadius: "12px",
    color: "#f0f0f0",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    maxWidth: "800px",
  };

  const titleStyle = {
    color: "#d4af37", // Matte gold color for the title
    marginBottom: "20px",
  };

  const listStyle = {
    textAlign: "left",
    padding: "0 20px",
    lineHeight: "1.8",
  };

  const listItemStyle = {
    backgroundColor: "#2c2f3b", // Dark matte background for the list items
    padding: "10px 15px",
    borderRadius: "8px",
    marginBottom: "10px",
    color: "#fdd835", // Gold color for the list item text
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for list items
  };

  const paragraphStyle = {
    marginBottom: "20px",
    color: "#cccccc", // Light grey text for description
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>RWA Investment Package</h2>
      <p style={paragraphStyle}>
        Stake in packages starting from $50. Earn 0.1% daily for 4 years, with
        the opportunity to sell tokens on the exchange.
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Price: $50 per unit</li>
        <li style={listItemStyle}>Commissionable Value: 40%</li>
        <li style={listItemStyle}>Every Day Earning: 0.1% RSP for 4 years</li>
        <li style={listItemStyle}>Sell: Sell RWATOKEN 5% on the exchange</li>
      </ul>
    </section>
  );
};

export default InvestmentPackage;
