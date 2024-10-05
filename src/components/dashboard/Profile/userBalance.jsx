/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@mui/material";
import ConnectButton from "../ConnectButton";

const UserBalanceCard = ({ balances, styles }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");

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

  return (
    <div style={styles.netWorthCard}>
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
        >
         <ConnectButton/>
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
