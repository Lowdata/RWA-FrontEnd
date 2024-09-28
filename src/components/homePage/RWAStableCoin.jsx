
import { stable } from "../../assets/images";
import SectorBanner from "./sectorCard";


const RwaStableToken = () => {
    const data = `RWAUSD Is A Stable Token 
Locked For Four Years, 
Designed To Minimize Price 
Volatility By Being Pegged To 
A Stable Asset Such As USD`;
  return (
    <section className="sector-section">
      <SectorBanner
        image={stable}
        title="RWA Stable Token"
        description={data}
        reverse={true}
      />
    </section>
  );
};

export default RwaStableToken;
