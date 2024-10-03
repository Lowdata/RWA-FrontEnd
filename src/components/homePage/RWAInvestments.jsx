

import {  investment } from "../../assets/images";
import SectorBanner from "./sectorCard";

const RwaInvestment = () => {
    const data = `Real World Asset Investment 
involves allocating capital to tangible 
assets that exist in the physical world.`;
  return (
    <section className="sector-section">
      <SectorBanner
        image={investment}
        title="RWA Investment"
        description={data}
        reverse={false}
        route="/rwa-investment"
      />
    </section>
  );
};

export default RwaInvestment;
