

const services = [
  {
    title: "RWATOKEN",
    description:
      "A versatile digital asset offering significant utility in our ecosystem.",
  },
  {
    title: "RWAUSD",
    description:
      "A stable currency ensuring low volatility, perfect for trading and secure savings.",
  },
  {
    title: "RWA Investment",
    description: "Explore diverse investment opportunities starting at $50.",
  },
  {
    title: "RWANFT",
    description:
      "Digital ownership verified by blockchain, offering fractional ownership and liquidity.",
  },
  {
    title: "Founder Member",
    description: "Exclusive benefits and early access for founding members.",
  },
  {
    title: "RWA Sourcing Partner",
    description:
      "Strategic collaboration opportunities for sourcing and business growth.",
  },
  {
    title: "Business Partner",
    description:
      "Engage in joint ventures, business activities, and more within the ecosystem.",
  },
];

const ServiceOverview = () => {
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

  const itemStyle = {
    backgroundColor: "#27293d",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={{ color: "#fdd835" }}>Products and Services Overview</h2>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div key={index} style={itemStyle}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOverview;
