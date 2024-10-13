import ServiceOverview from "../components/packages/serviceOverview";
import InvestmentPackage from "../components/packages/InvestmentPackages";
import NftPackage from "../components/packages/NFTPackages";
import Footer from "../components/packages/Footer";
import PackageCard from "../components/dashboard/PackageCards";

const packagePrices = [50, 100, 300, 500, 2500, 5000, 10000];
const packageStars = [1, 2, 3, 4, 5, 6, 7];

const PackagesPage = () => {
  const pageStyle = {
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#1e1e2e",
    color: "#f0f0f0",
    margin: 0,
    padding: 0,
  };

  const sectionStyle = {
    padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const currencySectionStyle = {
    marginBottom: "40px",
    width: "100%",
    textAlign: "center",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <div style={pageStyle}>
      <div style={sectionStyle}>
        {/* RWATOKEN Section */}
        <div style={currencySectionStyle}>
          <h2>RWATOKEN Packages</h2>
          <div style={cardContainerStyle}>
            {packagePrices.map((price, index) => (
              <PackageCard
                key={`rwa-token-${price}`} // Unique key for RWATOKEN
                price={price}
                stars={packageStars[index]}
              />
            ))}
          </div>
        </div>

        {/* RWAUSD Section */}
        <div style={currencySectionStyle}>
          <h2>RWAUSD Packages</h2>
          <div style={cardContainerStyle}>
            {packagePrices.map((price, index) => (
              <PackageCard
                key={`rwa-usd-${price}`} // Unique key for RWAUSD
                price={price}
                stars={packageStars[index]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Service Overview and other sections */}
      <ServiceOverview />
      <InvestmentPackage />
      <NftPackage />
    </div>
  );
};

export default PackagesPage;
