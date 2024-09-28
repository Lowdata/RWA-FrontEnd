import React from "react";
import Marketplace from "../components/homePage/marketplace";
import Hero from "../components/homePage/hero";
import About from "../components/homePage/about";
import RwaInvestment from "../components/homePage/RWAInvestments";
import RwaCoin from "../components/homePage/RWACoin";
import RwaNFTs from "../components/homePage/RWANfts";
import RwaStableToken from "../components/homePage/RWAStableCoin";


export const HomePage = () => {
  return (
    <div className="App">
      <>
        <Hero />
        <About />
        <section style={{
    display: "flex",
    width: "80%",
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    paddingRight:"40px",
    margin: "15px auto"}}>
          <RwaInvestment />
          <RwaCoin />
          <RwaNFTs />
          <RwaStableToken />
        </section>
        <Marketplace />
      </>
    </div>
  );
};
