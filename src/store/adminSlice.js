import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const response = await fetch("https://rwa-backend.onrender.com/admin/users");
  const data = await response.json();
  return data.users;
});

export const fetchSourcingPartners = createAsyncThunk(
  "admin/fetchSourcingPartners",
  async () => {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/sourcingPartners"
    );
    const data = await response.json();
    return data.referrals; 
  }
);


// Fetch referral details by RWA ID
export const fetchReferralDetails = createAsyncThunk(
  "admin/fetchReferralDetails",
  async (rwaId) => {
    const response = await fetch(
      `https://rwa-backend.onrender.com/users/referrals/${rwaId}`
    );
    const data = await response.json();
    return data.referrals; // Assuming the API returns an array of referrals
  }
);

// Approve or reject business partner
export const approveOrRejectBusinessPartner = createAsyncThunk(
  "admin/approveOrRejectBusinessPartner",
  async ({ rwa_id, status }, { dispatch }) => {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/approveBusinessPartner",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rwa_id, status }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      dispatch(fetchUsers()); // Refresh business partner list
      return { rwa_id, status, success: true };
    } else {
      throw new Error(data.message || "Approval failed");
    }
  }
);

//Fetch user earnings and Rank
export const fetchUserEarnings = createAsyncThunk(
  "admin/fetchUserEarnings",
  async (rwaId) => {
    const response = await fetch(
      `https://rwa-backend.onrender.com/users/earnings/${rwaId}`
    );
    const data = await response.json();
    return data; // Assuming the API returns earnings information
  }
);



const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    sourcingPartners: [],
    loading: false,
    earningsDetails: null,
    rank:"Unranked",
    referralDetails: null,
    error: null,
    todayJoining: 0,
    totalJoining: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    
    builder
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
      .addCase(fetchSourcingPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSourcingPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.sourcingPartners = action.payload;
      })
      .addCase(fetchSourcingPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle fetching referral details
      .addCase(fetchReferralDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReferralDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.referralDetails = action.payload; // Save referral details
      })
      .addCase(fetchReferralDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle fetching earnings
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
      });
  },
});

export default adminSlice.reducer;