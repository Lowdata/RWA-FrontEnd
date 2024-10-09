import { createSlice } from "@reduxjs/toolkit";
import {
  fetchReferralDetails,
  fetchUserEarnings,
  fetchUsers,
  deductTokens,
  creditTokens,
  approveOrRejectBusinessPartner,
  fetchAdminStats
} from "./api/admin";





const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    sourcingPartners: [],
    loading: false,
    earningsDetails: null,
    stats: {
      totalUsers: 0,
      totalReferralEarnings: "0.00",
      totalMatrixEarnings: "0.00",
      totalRevenueEarnings: "0.00",
      totalLeadershipEarnings: "0.00",
      totalDailyEarnings: "0.00",
      totalDirectRoyaltyEarnings: "0.00",
      totalEarnings: "0.00",
    },
    rank: "Unranked",
    referralDetails: null,
    error: null,
    todayJoining: 0,
    totalJoining: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.totalJoining = action.payload.length;
        const today = new Date().toISOString().slice(0, 10);
        state.todayJoining = action.payload.filter(
          (user) => user.createdAt.slice(0, 10) === today
        ).length;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Approve or reject business partner
      .addCase(approveOrRejectBusinessPartner.fulfilled, (state, action) => {
        state.sourcingPartners = state.sourcingPartners.filter(
          (partner) => partner.rwa_id !== action.payload.rwa_id
        );
      })
      .addCase(approveOrRejectBusinessPartner.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // Fetch referral details
      .addCase(fetchReferralDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReferralDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.referralDetails = action.payload;
      })
      .addCase(fetchReferralDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Fetch user earnings
      .addCase(fetchUserEarnings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserEarnings.fulfilled, (state, action) => {
        state.loading = false;
        state.earningsDetails = action.payload;
      })
      .addCase(fetchUserEarnings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Credit and deduct tokens
      .addCase(creditTokens.fulfilled, (state, action) => {
        console.log("Tokens credited successfully", action.payload);
      })
      .addCase(creditTokens.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deductTokens.fulfilled, (state, action) => {
        console.log("Tokens deducted successfully", action.payload);
      })
      .addCase(deductTokens.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Handle the admin stats fetching
      .addCase(fetchAdminStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchAdminStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;