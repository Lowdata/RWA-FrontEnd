import React from "react";
import { nft } from "../../assets/images";
import SectorBanner from "./sectorCard";


const RwaNFTs = () => {
    const data = `RWA NFT stands for "Real World Asset Non-Fungible Token," representing a revolutionary approach to digital 
ownership and investment. As a Non-Fungible Token (NFT), RWA NFT offers unique features and benefits that 
set it apart in the digital asset landscape`;
  return (
    <section className="sector-section">
      <SectorBanner
        image={nft}
        title="RWA NFTs"
        description={data}
        reverse={false}
      />
    </section>
  );
};

export default RwaNFTs;
