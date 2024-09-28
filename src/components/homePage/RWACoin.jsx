import React from "react";

import { coin } from "../../assets/images";
import SectorBanner from "./sectorCard";


const RwaCoin = () => {
    const data = `RWAS is a digital token on BSC representing ownership or rights to real-world assets. Designed for enhanced 
liquidity, fractional ownership, and transparent asset management.`;
  return (
    <section className="sector-section">
      <SectorBanner
        image={coin}
        title="RWA Coin"
        description={data}
        reverse={true}
       
      />
    </section>
  );
};

export default RwaCoin;
