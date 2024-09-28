
import ServiceOverview from "../components/packages/serviceOverview";
import TokenPackages from "../components/packages/TokenPackages";
import InvestmentPackage from "../components/packages/InvestmentPackages";
import NftPackage from "../components/packages/NFTPackages";
import Footer from "../components/packages/Footer";

const PackagesPage = () => {
  const pageStyle = {
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#1e1e2e",
    color: "#f0f0f0",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={pageStyle}>
      <ServiceOverview />
      <TokenPackages />
      <InvestmentPackage />
      <NftPackage />
      <Footer />
    </div>
  );
};

export default PackagesPage;
