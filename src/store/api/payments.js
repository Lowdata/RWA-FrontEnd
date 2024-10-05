import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

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