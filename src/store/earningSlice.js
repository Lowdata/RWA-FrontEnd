import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rank: "",
  referralEarnings: "0.00",
  matrixEarnings: "0.00",
  revenueEarnings: "0.00",
  leadershipEarnings: "0.00",
  dailyEarnings: "0.00",
  directRoyaltyEarnings: "0.00",
  totalEarnings: "0.00",
  nativeBnbBalance: null,
  usdtBalance: null,
  rwaTokenBalance: null,
  rwaUsdBalance: null,
  loading: false,
  error:null,
};

// Thunk to fetch earnings data
export const fetchUserEarnings = createAsyncThunk(
  "earnings/fetchUserEarnings",
  async (userId) => {
    const response = await axios.get(
      `https://rwa-backend.onrender.com/users/earnings/${userId}`
    );
    return response.data;
  }
);

export const fetchUserBalance = createAsyncThunk(
  "earnings/fetchUserBalance",
  async (userId) => {
    try {
      const response = await axios.get(
        `https://rwa-backend.onrender.com/users/balance/${userId}`
      );
       const { nativeBnbBalance, usdtBalance, rwaUsdBalance, rwaTokenBalance } =
         response.data;
         console.log("Balances",response.data);
         return {
           nativeBnbBalance,
           usdtBalance,
           rwaUsdBalance,
           rwaTokenBalance,
         };
    } catch (error) {
      console.error("Failed to fetch user balance:", error);
      throw error;
    }
  }
);

const earningsSlice = createSlice({
  name: "earnings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserEarnings.fulfilled, (state, action) => {
      state.rank = action.payload.rank || state.rank;
      state.referralEarnings =
        action.payload.referralEarnings || state.referralEarnings;
      state.matrixEarnings =
        action.payload.matrixEarnings || state.matrixEarnings;
      state.revenueEarnings =
        action.payload.revenueEarnings || state.revenueEarnings;
      state.leadershipEarnings =
        action.payload.leadershipEarnings || state.leadershipEarnings;
      state.dailyEarnings = action.payload.dailyEarnings || state.dailyEarnings;
      state.directRoyaltyEarnings =
        action.payload.directRoyaltyEarnings || state.directRoyaltyEarnings;
      state.totalEarnings = action.payload.totalEarnings || state.totalEarnings;
    });
    builder.addCase(fetchUserBalance.pending, (state) => {
      state.loading = true;
    });
    //fulfilled
    builder.addCase(fetchUserBalance.fulfilled, (state,action)=>{
         state.nativeBnbBalance = action.payload.nativeBnbBalance ?? "0.00";
         state.usdtBalance = action.payload.usdtBalance ?? "0.00";
         state.rwaUsdBalance = action.payload.rwaUsdBalance ?? "0.00";
         state.rwaTokenBalance = action.payload.rwaTokenBalance ?? "0.00";
    });
    //rejected
    builder.addCase(fetchUserBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default earningsSlice.reducer;
