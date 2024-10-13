/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSendTransaction,
  useWaitForTransactionReceipt,
  WagmiProvider,
} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ethers } from "ethers";
import { estimateGas } from "@wagmi/core"; // Import estimateGas from wagmi core
import { config } from "./config"; // Import your config file
import {
  parseEther,
  toHex,
  encodeAbiParameters,
} from "viem";

// Import Material UI components
import {
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
// CURRENCY CONTRACTS
  const USDT_ADDRESS = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
  const RWA_ADDRESS = "0xa4ABEDf4c304808a137640f2d6cF3342BdD84072"; // RWA token address
  const RWAUSD_ADDRESS = "0x5F6CeFa2526C830901A3f8ce048C466142A617B5"; // RWAUSD token address

  const tokenAddresses = {
    USDT: USDT_ADDRESS,
    RWA: RWA_ADDRESS,
    RWAUSD: RWAUSD_ADDRESS,
  };

const ConnectButton = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, pendingConnector, isLoading } = useConnect();
  const { disconnect } = useDisconnect();

  // Add logs to inspect connector statuses
  console.log("Connectors: ", connectors);
  console.log("isLoading: ", isLoading);
  console.log("pendingConnector: ", pendingConnector);

  return (
    <Box>
      {isConnected ? (
        <Box>
          <p>Connected to {address}</p>
          <Button variant="contained" onClick={() => disconnect()}>
            Disconnect
          </Button>
        </Box>
      ) : (
        connectors.map((connector) => {
          // If connector.ready is undefined, consider using an alternative condition
          const isConnectorReady = connector.ready !== false && connector.id;

          return (
            <Button
              key={connector.id}
              variant="contained"
              onClick={() => connect({ connector })}
              sx={{ m: 1 }}
              disabled={
                !isConnectorReady ||
                isLoading ||
                pendingConnector?.id === connector.id
              }
            >
              {connector.name}
              {isLoading &&
                pendingConnector?.id === connector.id &&
                " (connecting...)"}
            </Button>
          );
        })
      )}
    </Box>
  );
};
const SendTransactionForm = () => {
const { isConnected, address } = useAccount();
const [recipient, setRecipient] = useState("");
const [amount, setAmount] = useState("");
const [currency, setCurrency] = useState("BNB");
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [isLoading, setIsLoading] = useState(false);


 const { sendTransaction } = useSendTransaction();
const {
  isLoading: isConfirming,
  isSuccess: isConfirmed,
  hash,
} = useWaitForTransactionReceipt();

   const handleSendTransaction = async () => {
     setIsLoading(true);
     setIsSuccess(false);
     setIsError(false);

     try {
       if (currency === "BNB") {
         // Estimate gas for native BNB transfer
         const gasEstimate = await estimateGas(config, {
           request: {
             to: recipient,
             value: parseEther(amount),
           },
         });

         console.log("Gas estimate for BNB:", gasEstimate);

         await sendTransaction({
           to: recipient,
           value: parseEther(amount),
         });
       } else {
         // Token transaction
         const tokenAddress = tokenAddresses[currency];

         // Estimate gas for token transfer
         const gasEstimate = await estimateGas(config, {
           request: {
             to: tokenAddress,
             data: toHex(
               encodeAbiParameters(
                 ["address", "uint256"],
                 [recipient, ethers.utils.parseUnits(amount, 18)]
               )
             ),
           },
         });

         console.log("Gas estimate for token:", gasEstimate);

         // Send token transaction
         await sendTransaction({
           to: tokenAddress,
           data: toHex(
             encodeAbiParameters(
               ["address", "uint256"],
               [recipient, ethers.utils.parseUnits(amount, 18)]
             )
           ),
           gasLimit: gasEstimate,
         });
       }

       setIsSuccess(true);
     } catch (error) {
       setIsError(true);
       setErrorMessage(error.message || "Transaction failed");
       console.log(error.message || "Transaction failed");
     }

     setIsLoading(false);
   };

   const handleCloseSnackbar = () => {
     setIsSuccess(false);
     setIsError(false);
   };

   if (!isConnected) {
     return <p>Please connect your wallet to send a transaction.</p>;
   }


  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendTransaction();
      }}
    >
      {/* Recipient Address */}
      <TextField
        label="Recipient Address"
        variant="outlined"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
        margin="normal"
        required
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            borderRadius: "8px",
          },
          "& label.Mui-focused": {
            color: "#e2b857",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#e2b857",
            },
          },
        }}
      />

      {/* Amount */}
      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
        required
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            borderRadius: "8px",
          },
          "& label.Mui-focused": {
            color: "#e2b857",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#e2b857",
            },
          },
        }}
      />

      {/* Currency */}
      <TextField
        select
        label="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        fullWidth
        margin="normal"
        sx={{
          mb: 2,
          "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            borderRadius: "8px",
          },
          "& label.Mui-focused": {
            color: "#e2b857",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#e2b857",
            },
          },
        }}
      >
        <MenuItem value="BNB">BNB</MenuItem>
        <MenuItem value="USDT">USDT</MenuItem>
        <MenuItem value="RWA">RWA</MenuItem>
        <MenuItem value="RWAUSD">RWAUSD</MenuItem>
      </TextField>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={isLoading}
        sx={{ mt: 2 }}
      >
        {isLoading ? "Sending..." : "Send Transaction"}
      </Button>

      {/* Success Alert */}
      <Snackbar
        open={isSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Transaction successful!
        </Alert>
      </Snackbar>

      {/* Error Alert */}
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
const queryClient = new QueryClient();
const WalletActions = () => {
  const { isConnected } = useAccount();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Box>
          <h1>Wallet Actions</h1>
          <ConnectButton />
          {isConnected && <SendTransactionForm />}
        </Box>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletActions;
