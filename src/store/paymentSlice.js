import {
  makePayment,
  tokenPayment,
  buyTokens,
  claimRewards,
  fetchInvestments,
} from "./api/payments"; // Import fetchInvestments
import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: null,
    error: null,
    paymentDetails: null,
    investments: [], // Add for investments
    investmentsStatus: null, // Add for status
    investmentsError: null, // Add for error
  },
  reducers: {
    resetPaymentState: (state) => {
      state.status = null;
      state.error = null;
      state.paymentDetails = null;
      state.investmentsStatus = null;
      state.investmentsError = null;
    },
  },
  extraReducers: (builder) => {
    // Handling makePayment actions
    builder
      .addCase(makePayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentDetails = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Handling tokenPayment actions
    builder
      .addCase(tokenPayment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(tokenPayment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentDetails = action.payload;
      })
      .addCase(tokenPayment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Handling buyTokens actions
    builder
      .addCase(buyTokens.pending, (state) => {
        state.status = "loading";
      })
      .addCase(buyTokens.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentDetails = action.payload;
      })
      .addCase(buyTokens.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });

    // Handling claimRewards actions
    builder
      .addCase(claimRewards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(claimRewards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.paymentDetails = action.payload;
      })
      .addCase(claimRewards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    // Handling fetchInvestments actions
    builder
      .addCase(fetchInvestments.pending, (state) => {
        state.investmentsStatus = "loading";
        state.investmentsError = null;
      })
      .addCase(fetchInvestments.fulfilled, (state, action) => {
        state.investmentsStatus = "succeeded";
        state.investments = action.payload; // Store fetched investments
      })
      .addCase(fetchInvestments.rejected, (state, action) => {
        state.investmentsStatus = "failed";
        state.investmentsError = action.payload; // Store error message
      });
  },
});

export const { resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
