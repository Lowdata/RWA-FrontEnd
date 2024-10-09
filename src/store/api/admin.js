import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const response = await fetch("https://rwa-backend.onrender.com/admin/users");
  const data = await response.json();
  return data.users;
});

export const fetchBusinessPartners = createAsyncThunk("admin/fetchBusinessPartners", async () => {
  const response = await fetch(
    "https://rwa-backend.onrender.com/admin/businessPartners"
  );
  const data = await response.json();
  return data.businessPartners;
});

// Fetch stats from the admin API
export const fetchAdminStats = createAsyncThunk("admin/fetchAdminStats", async () => {
  const response = await fetch("https://rwa-backend.onrender.com/admin/stats");
  if (!response.ok) {
    throw new Error("Failed to fetch admin stats");
  }
  return response.json();
});

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

// Credit Tokens
export const creditTokens = createAsyncThunk(
  "admin/creditTokens",
  async ({ userWallet, tokenType, amount }) => {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/creditTokens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userWallet, tokenType, amount }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to credit tokens");
    }
    return data;
  }
);

// Deduct Tokens
export const deductTokens = createAsyncThunk(
  "admin/deductTokens",
  async ({ userWallet, tokenType, amount }) => {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/deductTokens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userWallet, tokenType, amount }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to deduct tokens");
    }
    return data;
  }
);

export const sourcingPartners = createAsyncThunk(
    "admin/fetchSourcingPartners",
  async () => {
    const response = await fetch("https://rwa-backend.onrender.com/admin/sourcingPartners");
    const data = await response.json();
    return data;
  }
);

export const approveSourcingPartner = createAsyncThunk(
  "admin/approveSourcingPartner",
  async ({ rwa_id }, { dispatch }) => {
    const response = await fetch(
      "https://rwa-backend.onrender.com/admin/approveSourcingPartner",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rwa_id }),
      }
    );
    const data = await response.json;
    if (response.ok) {
      dispatch(sourcingPartners()); // Refresh business partner list
      return { rwa_id, success: true };
    } else {
      throw new Error(data.message || "Approval failed");
    }
  }
);




