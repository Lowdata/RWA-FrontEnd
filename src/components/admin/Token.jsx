import { useState } from "react";
import { useDispatch } from "react-redux";
import { creditTokens, deductTokens } from "../../store/api/admin"; // Add these action creators

const TokenManagement = () => {
  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenType, setTokenType] = useState("RWATOKEN");
  const [amount, setAmount] = useState(0);
  const [actionType, setActionType] = useState("credit"); // 'credit' or 'deduct'

  const handleTokenAction = () => {
    if (actionType === "credit") {
      dispatch(creditTokens({ userWallet: walletAddress, tokenType, amount }));
    } else {
      dispatch(deductTokens({ userWallet: walletAddress, tokenType, amount }));
    }
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(value < 0 ? 0 : value); // Ensure the amount doesn't go below 0
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <h2>Manage Tokens</h2>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Wallet Address:
        </label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Token Type:
        </label>
        <select
          value={tokenType}
          onChange={(e) => setTokenType(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="RWATOKEN">RWATOKEN</option>
          <option value="RWAUSD">RWAUSD</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Amount:
        </label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label
          style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
        >
          Action:
        </label>
        <div>
          <label
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: actionType === "credit" ? "#007bff" : "#ccc",
              color: actionType === "credit" ? "white" : "black",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              value="credit"
              checked={actionType === "credit"}
              onChange={() => setActionType("credit")}
              style={{ marginRight: "5px" }}
            />
            Credit Tokens
          </label>
          <label
            style={{
              padding: "10px 20px",
              backgroundColor: actionType === "deduct" ? "#007bff" : "#ccc",
              color: actionType === "deduct" ? "white" : "black",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              value="deduct"
              checked={actionType === "deduct"}
              onChange={() => setActionType("deduct")}
              style={{ marginRight: "5px" }}
            />
            Deduct Tokens
          </label>
        </div>
      </div>
      <button
        onClick={handleTokenAction}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TokenManagement;
