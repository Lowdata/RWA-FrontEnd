import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
  fetchUserReferrals
} from "./auth/authAction";
import { REHYDRATE } from "redux-persist";
const initialState = {
  email: "",
  password: "",
  userName: "",
  referrerId: "",
  role: "",
  publicKey: "",
  privateKey: "",
  referrerRwaId: "",
  userId: "",
  error: "",
  successMessage: "",
  approval: null,
  isLoading: false,
  isLoggedIn: false,
  rehydrationCompleted: false,
  referrals: {}, // Add a state to store the fetched referrals
  referralsLoading: false,
  referralsError: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload; 
    },
    setEmail(state, action) {
      state.email = action.payload; // log updated state
    },
    setPassword(state, action) {
      state.password = action.payload; // log updated state
    },
    setUserName(state, action) {
      state.userName = action.payload; // log updated state
    },
    setReferrerId(state, action) {
      state.referrerId = action.payload; // log updated state
    },
    setError(state, action) {
      state.error = action.payload; // log updated state
    },
    setRole(state, action) {
      state.role = action.payload; // log updated state
    },
    setApproval(state, action) {
      state.approval = action.payload; // log updated state
    },
    setSuccessMessage(state, action) {
      state.successMessage = action.payload; // log updated state
    },
    setLoading(state, action) {
      state.isLoading = action.payload; // log updated state
    },
    clearForm(state) {
      return {
        ...state, // Retain the current state
        email: state.email, // Clear form fields only
        password: "",
        userName: state.userName,
        referrerRwaId: state.referrerRwaId,
        error: "", // Clear error message if any
        successMessage: "", // Clear success message if any
        isLoading: false,
        isLoggedIn: state.isLoggedIn, // Retain login status
        role: state.role, // Retain the user role
        publicKey: state.publicKey, // Retain the publicKey
        privateKey: state.privateKey, // Retain the privateKey
        approval: state.approval, // Retain approval status if any
        userId: state.userId, // Retain userId
        rehydrationCompleted: state.rehydrationCompleted,
      };
    },
  },

  //rehydration user
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload && action.payload.auth) {
        console.log("Rehydrating state: ", action.payload.auth);
        state.isLoggedIn = action.payload.auth.isLoggedIn || false;
        state.email = action.payload.auth.email || "";
        state.userName = action.payload.auth.userName || "";
        state.role = action.payload.auth.role || "";
        state.publicKey = action.payload.auth.publicKey || "";
        state.privateKey = action.payload.auth.privateKey || "";
        state.userId = action.payload.auth.userId || ""; // Ensure userId is rehydrated
        state.approval = action.payload.auth.approval || null;
        state.rehydrationCompleted = true;
      }
    });

    // Register User Cases
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = "User registered successfully";
        state.email = "";
        state.password = "";
        state.userName = "";
        state.referrerId = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Error registering user";
      });

    // Login User Cases
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        console.log("Login successful, state updated:", state);
        state.successMessage = "User logged in successfully";

        const { user } = action.payload;
        state.email = user.email || "";
        state.userName = user.userName || "";
        state.userId = user.id || "";
        state.role = user.role || "";
        state.publicKey = user.publicKey || "";
        state.privateKey = user.privateKey || "";
        state.approval = user.approval || null;
        console.log(user);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Error in user login";
      });

    // Forgot Password Cases
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = "Password reset email sent";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Error in sending reset email";
      });

    // Verify OTP Cases
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = "OTP verified successfully";
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Error in OTP verification";
      });

    // Reset Password Cases
    builder
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.successMessage = "Password reset successfully";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || "Error in resetting password";
      });

    // Handle fetchUserReferrals cases
    builder
      .addCase(fetchUserReferrals.pending, (state) => {
        state.referralsLoading = true;
        state.referralsError = null;
      })
      .addCase(fetchUserReferrals.fulfilled, (state, action) => {
        state.referrals = action.payload; // Store the referrals in state
        state.referralsLoading = false;
      })
      .addCase(fetchUserReferrals.rejected, (state, action) => {
        state.referralsLoading = false;
        state.referralsError =
          action.payload?.message || "Failed to load referrals";
      });
  },
});

export const {
  setEmail,
  setPassword,
  setUserName,
  setReferrerId,
  setError,
  setSuccessMessage,
  setLoading,
  clearForm,
  setIsLoggedIn,
  setRole,
  setApproval,
  setPublicKey,
  setPrivateKey,
} = authSlice.actions;

export default authSlice.reducer;
