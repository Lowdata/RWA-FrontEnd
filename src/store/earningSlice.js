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
  },
});

export default earningsSlice.reducer;
