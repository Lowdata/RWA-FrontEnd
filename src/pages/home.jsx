import Marketplace from "../components/homePage/marketplace";
import Hero from "../components/homePage/hero";
import About from "../components/homePage/about";
import RwaInvestment from "../components/homePage/RWAInvestments";
import RwaCoin from "../components/homePage/RWACoin";
import RwaNFTs from "../components/homePage/RWANfts";
import RwaStableToken from "../components/homePage/RWAStableCoin";
import NumberCounter from "../components/homePage/counter";
import UserNotifications from "../components/homePage/notification";

export const HomePage = () => {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#1A2135", color: "#F5F5F5" }}
    >
      <Hero />
      <About />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: "20px 0",
          backgroundColor: "#101521",
        }}
      >
        {/* Adding the increasing number animations */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#252A3D",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <NumberCounter
            title="RWAUSD Sales"
            endValue={5000}
            totalSupply="500 Billion"
          />
          <NumberCounter
            title="RWA Token Sales"
            endValue={10000}
            totalSupply="100 Billion"
          />
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            backgroundColor: "#252A3D",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            width: "100%",
          }}
        >
          <UserNotifications />
        </div>
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
            justifyContent: "center",
            padding: "20px", // Center content with padding
            maxWidth: "1200px",
          }}
        >
          <RwaInvestment />
          <RwaCoin />
          <RwaNFTs />
          <RwaStableToken />
        </div>
      </section>
      <Marketplace />
    </div>
  );
};
