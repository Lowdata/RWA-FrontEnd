import { useSelector } from "react-redux";
import "./Rank.css";

const RankAndRewardsPage = () => {
  const earnings = useSelector((state) => state.admin);
  if (!earnings) {
    return <div>Loading...</div>; // Handle loading or null state
  }
  const { rank: userRank = "Unranked" } = earnings;
 const ranks = [
   {
     rank: "Unranked",
     color: "#808080",
     cash: "0",
     nft: "0",
     reward: "0",
     trip: "0",
     teamFund: "0",
     meetingFund: "0",
   },
   {
     rank: "Sr. Promoter",
     color: "#800",
     cash: 50,
     nft: 25,
     reward: 100,
     trip: "Local",
     teamFund: 1000,
     meetingFund: "-",
   },
   {
     rank: "Bronze",
     color: "#CD7F32",
     cash: 500,
     nft: 100,
     reward: 200,
     trip: "Local",
     teamFund: 10000,
     meetingFund: 100,
   },
   {
     rank: "Silver",
     color: "#606060",
     cash: 3000,
     nft: 300,
     reward: 500,
     trip: "International",
     teamFund: 100000,
     meetingFund: 500,
   },
   {
     rank: "Gold",
     color: "#FFD700",
     cash: 10000,
     nft: 1000,
     reward: 1000,
     trip: "International",
     teamFund: 375000,
     meetingFund: 1000,
   },
   {
     rank: "Platinum",
     color: "#E5E4E2",
     cash: 20000,
     nft: 2000,
     reward: 3000,
     trip: "International",
     teamFund: 975000,
     meetingFund: 3000,
   },
   {
     rank: "Ruby",
     color: "#E0115F",
     cash: 40000,
     nft: 4000,
     reward: 10000,
     trip: "International",
     teamFund: 2500000,
     meetingFund: 10000,
   },
   {
     rank: "Emerald",
     color: "#50C878",
     cash: 100000,
     nft: 10000,
     reward: 20000,
     trip: "International",
     teamFund: 7000000,
     meetingFund: 20000,
   },
   {
     rank: "Founder Emerald",
     color: "#50C878",
     cash: 200000,
     nft: 20000,
     reward: 30000,
     trip: "International",
     teamFund: 16000000,
     meetingFund: 30000,
   },
   {
     rank: "Diamond",
     color: "#B9F2FF",
     cash: 500000,
     nft: 30000,
     reward: 50000,
     trip: "International",
     teamFund: 30000000,
     meetingFund: 50000,
   },
   {
     rank: "Black Diamond",
     color: "#B9F2FG",
     cash: 1000000,
     nft: 50000,
     reward: 100000,
     trip: "International",
     teamFund: 77000000,
     meetingFund: 100000,
   },
   {
     rank: "Crown",
     color: "#E5E4E2",
     cash: 2000000,
     nft: 100000,
     reward: 150000,
     trip: "International",
     teamFund: 160000000,
     meetingFund: 150000,
   },
   {
     rank: "Crown Ambassador",
     color: "#FFDF00",
     cash: 4000000,
     nft: 200000,
     reward: 250000,
     trip: "International",
     teamFund: 300000000,
     meetingFund: 250000,
   },
 ];

  const userRankInfo = ranks.find((rank) => rank.rank === userRank) || ranks[0];

  return (
    <div className="rank-rewards-container">
      <h1 className="heading">Rank and Rewards</h1>
      <p className="description">
        Discover the different ranks and their rewards. Every rank comes with
        exclusive benefits like cash rewards, NFTs, team funds, and
        international trips.
      </p>

      {/* Small card showing the user's rank */}
      <div className="user-rank-card" style={{ backgroundColor: userRankInfo.color }}>
        <h2>Your Rank: {userRankInfo.rank}</h2>
        <p>Cash Reward: {userRankInfo.cash} USDT</p>
        <p>NFT Reward: {userRankInfo.nft}</p>
        <p>Team Fund: {userRankInfo.teamFund} USDT</p>
        <p>Trip: {userRankInfo.trip}</p>
        <p>Meeting Fund: {userRankInfo.meetingFund}</p>
      </div>

      {/* Ranks table */}
      <h2 className="table-heading">All Ranks Overview</h2>
      <table className="rank-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Cash Reward (USDT)</th>
            <th>NFT</th>
            <th>Reward (USDT)</th>
            <th>Trip</th>
            <th>Team Business Fund (USDT)</th>
            <th>Meeting Fund</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((rank) => (
            <tr
              key={rank.rank}
              className={userRank === rank.rank ? "highlighted-row" : ""}
            >
              <td>{rank.rank}</td>
              <td>{rank.cash}</td>
              <td>{rank.nft}</td>
              <td>{rank.reward}</td>
              <td>{rank.trip}</td>
              <td>{rank.teamFund}</td>
              <td>{rank.meetingFund}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bonus Tables */}
      <div className="bonus-section">
        <h3>Generation Commission</h3>
        <table className="bonus-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Distribution %</th>
            </tr>
          </thead>
          <tbody>
            {[15, 10, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3].map((percent, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{percent}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Leadership Matching Bonus</h3>
        <table className="bonus-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Company TO (7%)</th>
              <th>Leadership Matching (7%)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { rank: "Silver", companyTO: 2, matching: 2 },
              { rank: "Gold", companyTO: 1, matching: 1 },
              { rank: "Platinum", companyTO: 0.5, matching: 0.5 },
              { rank: "Ruby", companyTO: 0.5, matching: 0.5 },
              { rank: "Emerald", companyTO: 0.5, matching: 0.5 },
              { rank: "Founder Emerald", companyTO: 0.5, matching: 0.5 },
              { rank: "Diamond", companyTO: 0.5, matching: 0.5 },
              { rank: "Black Diamond", companyTO: 0.5, matching: 0.5 },
              { rank: "Crown", companyTO: 0.5, matching: 0.5 },
              { rank: "Crown Ambassador", companyTO: 0.5, matching: 0.5 },
            ].map((bonus) => (
              <tr key={bonus.rank}>
                <td>{bonus.rank}</td>
                <td>{bonus.companyTO}%</td>
                <td>{bonus.matching}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Global Matrix Bonus 3x12 (ROI on ROI)</h3>
        <table className="bonus-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Distribution %</th>
            </tr>
          </thead>
          <tbody>
            {[20, 10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5].map((percent, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{percent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankAndRewardsPage;
