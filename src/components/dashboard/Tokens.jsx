import React, { useState, useEffect } from "react";
import "./TokenPage.css";

const TokenPage = () => {
  const [selectedToken, setSelectedToken] = useState("RWA");
  const [amount, setAmount] = useState(0);
  const [stakingPeriod, setStakingPeriod] = useState(1);
  const [stakedTokens, setStakedTokens] = useState([]);
  const [timer, setTimer] = useState(null);

  const tokens = [
    { name: "RWA", info: "Unstable token with high volatility" },
    { name: "RWAUSD", info: "Stable token pegged to the USD" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStake = () => {
    const endTime = Date.now() + stakingPeriod * 365 * 24 * 60 * 60 * 1000;
    const stakedToken = {
      token: selectedToken,
      amount,
      endTime,
    };
    setStakedTokens([...stakedTokens, stakedToken]);
    setAmount(0); // Reset amount after staking
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) setAmount(value);
  };

  const calculateRemainingTime = (endTime) => {
    const remaining = endTime - Date.now();
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / 1000 / 60) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);
    return remaining > 0
      ? `${days}d ${hours}h ${minutes}m ${seconds}s`
      : "Expired";
  };

  const handleUnstake = (index) => {
    const updatedStakedTokens = stakedTokens.filter((_, i) => i !== index);
    setStakedTokens(updatedStakedTokens);
  };

  return (
    <div className="token-page professional">
      <h2 className="header">Stake Your Tokens</h2>

      <div className="token-list">
        <h3>Select Token:</h3>
        {tokens.map((token) => (
          <button
            key={token.name}
            className={`token-button ${
              selectedToken === token.name ? "selected" : ""
            }`}
            onClick={() => setSelectedToken(token.name)}
          >
            {token.name}
            <div className="tooltip">
              <span className="tooltip-text">{token.info}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="stake-form">
        <h3>Stake {selectedToken}</h3>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="input"
            min="0"
            step="1"
          />
        </label>

        <h4>Select Staking Period:</h4>
        <div className="radio-group">
          {[1, 2, 3, 4].map((year) => (
            <label key={year} className="radio-label">
              <input
                type="radio"
                value={year}
                checked={stakingPeriod === year}
                onChange={() => setStakingPeriod(year)}
                className="radio-input"
              />
              {year} Year{year > 1 ? "s" : ""}
            </label>
          ))}
        </div>

        <button
          onClick={handleStake}
          className="stake-button"
          disabled={amount <= 0}
        >
          Stake
        </button>
      </div>

      <div className="staked-tokens">
        <h3>Staked Tokens</h3>
        {stakedTokens.length === 0 ? (
          <p>No tokens staked yet.</p>
        ) : (
          <ul>
            {stakedTokens.map((staked, index) => (
              <li key={index} className="staked-item">
                <p>
                  {staked.amount} {staked.token} staked for {stakingPeriod} year
                  {stakingPeriod > 1 ? "s" : ""}.
                </p>
                <p>Time remaining: {calculateRemainingTime(staked.endTime)}</p>
                <button
                  onClick={() => handleUnstake(index)}
                  className="unstake-button"
                >
                  Unstake
                </button>
                <button className="sell-button">Sell</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TokenPage;
