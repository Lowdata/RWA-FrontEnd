/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
  Alert, // Import Alert from Material-UI
} from "@mui/material";
import ConnectButton from "../ConnectButton";

const UserBalanceCard = ({ balances, styles }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const tokenBalances = {
    BNB: balances.nativeBnbBalance,
    USDT: balances.usdtBalance,
    RWAUSD: balances.rwaUsdBalance,
    RWAToken: balances.rwaTokenBalance,
  };

  const balanceDisplay = tokenBalances[selectedCurrency] || "0.00";

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleWithdrawClick = () => {
    alert(`Withdraw ${selectedCurrency} clicked`);
  };

  const handleDepositClick = () => {
    setShowAlert(true); // Show the alert when the Deposit button is clicked
  };

  return (
    <div style={styles.netWorthCard}>
      {/* Alert for adding money to RWA Wallet */}
      {showAlert && (
        <Alert
          severity="info" // Set alert severity to info
          onClose={() => setShowAlert(false)} // Close the alert
          style={{ marginBottom: "16px" }} // Add some spacing below the alert
        >
          Steps to add money to your RWA Wallet:
          <ol>
            <li>Copy the RWA Public key from the profile</li>
            <li>Click on Deposit button</li>
            <li>Connect wallet</li>
            <li>Transfer funds to the Wallet</li>
          </ol>
        </Alert>
      )}

      {/* Currency Selector and Balance Display */}
      <div style={styles.accountBalanceContainer}>
        <FormControl style={styles.selectDropdown}>
          <Select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            displayEmpty
            inputProps={{ "aria-label": "Select Currency" }}
          >
            <MenuItem value="BNB">BNB</MenuItem>
            <MenuItem value="USDT">USDT</MenuItem>
            <MenuItem value="RWAUSD">RWA USD</MenuItem>
            <MenuItem value="RWAToken">RWA Token</MenuItem>
          </Select>
        </FormControl>

        <Typography style={styles.accountBalance}>
          Balance: {balanceDisplay} {selectedCurrency}
        </Typography>
      </div>

      {/* Buttons for Deposit and Withdraw */}
      <div style={styles.buttons}>
        <Button
          variant="contained"
          style={styles.button}
          onClick={handleDepositClick} // Attach the deposit click handler
        >
          <ConnectButton />
        </Button>
        <Button
          variant="contained"
          style={styles.button}
          onClick={handleWithdrawClick}
        >
          Withdraw
        </Button>
      </div>
    </div>
  );
};

export default UserBalanceCard;
