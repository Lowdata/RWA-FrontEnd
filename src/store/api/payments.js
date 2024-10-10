import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//nft stake
export const makePayment = createAsyncThunk(
  "payment/makePayment",
  async (
    { rwa_id, productId, investmentAmount, userAddress, lockDuration },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://rwa-backend.onrender.com/api/investment/nftStake",
        {
          rwa_id,
          productId,
          investmentAmount,
          tokenType: "RWAUSD",
          userAddress,
          lockDuration,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Payment failed");
    }
  }
);

// Fetch staked investments
export const fetchInvestments = createAsyncThunk(
  "investments/fetchInvestments", // Action type
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://rwa-backend.onrender.com/api/investment/my-investments",
        { params: { userId } }
      );
       console.log("staking ",response.data);
      return response.data; 
     
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch investments"
      );
    }
  }
);

//token stake 
export const tokenPayment = createAsyncThunk(
  "payment/tokenPayment",
  async (
    { rwa_id, tokenType, stakeAmount, userAddress, lockDuration },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://rwa-backend.onrender.com/api/token/stake",
        {
          rwa_id,
          tokenType,
          stakeAmount,
          userAddress,
          lockDuration,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Payment failed");
    }
  }
);

export const buyTokens = createAsyncThunk(
  "payments/buyTokens",
  async({userAddress, tokenType, buyAmount}, {rejectWithValue}

  )=> {
    try{
        const response = await axios.post(
          "https://rwa-backend.onrender.com/api/users/buyToken",
          {
            userAddress,
            tokenType,
            buyAmount,
          }
        );
        return response.data;
        
    }catch(error){
        return rejectWithValue(error.response.data|| "Payment Failes")
    }
  }
);

//claim rewards
export const claimRewards = createAsyncThunk(
  "payment/claimRewards",
  async ({ rwa_id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rwa-backend.onrender.com/api/users/claimRewards",
        { rwa_id }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Claim rewards failed");
    }
  }
);