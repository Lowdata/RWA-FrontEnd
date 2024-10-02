import { makePayment, tokenPayment } from "./api/payments";
import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    status: null,
    error: null,
    paymentDetails: null,
  },
  reducers: {
    resetPaymentState: (state) => {
      state.status = null;
      state.error = null;
      state.paymentDetails = null;
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
  },
});

export const { resetPaymentState } = paymentSlice.actions;
export default paymentSlice.reducer;
