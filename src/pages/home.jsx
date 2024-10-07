import Marketplace from "../components/homePage/marketplace";
import Hero from "../components/homePage/hero";
import About from "../components/homePage/about";
import RwaInvestment from "../components/homePage/RWAInvestments";
import RwaCoin from "../components/homePage/RWACoin";
import RwaNFTs from "../components/homePage/RWANfts";
import RwaStableToken from "../components/homePage/RWAStableCoin";
import NumberCounter from "../components/homePage/counter";
import UserNotifications from "../components/homePage/notification";
import Counter from "../components/homePage/NumberUser";
import "../styles/home.css"

export const HomePage = () => {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#1A2135", color: "#F5F5F5" }}
    >
      <Hero />
      <About />
      <section className="content-section">
        <div className="counter-container">
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
        <Counter
        title="Total User"
        />

        <div className="notifications-container">
          <UserNotifications />
        </div>

        <div className="investment-container">
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
