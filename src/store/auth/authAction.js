/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoggedIn } from "../authSlice";

export var publicKey = "";
export var userName = "";
export var id = "";
export var role = "";
export var user = {};

export const fetchUserProfile = createAsyncThunk;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/registerUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ status: response.status, ...errorData });
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Network error" });
    }
  }
);

//Login

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/loginUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ status: response.status, ...errorData });
      }

      const data = await response.json();

      const user = {
        userName: data.user.userName,
        id: data.user.rwa_id,
        role: data.user.role,
        email: data.user.email,
        publicKey: data.user.publicKey,
        privateKey: data.user.privateKey,
        approval: data.user.approval,
      };

      // Store the auth data in localStorage
      localStorage.setItem(
        "auth",
        JSON.stringify({ ...user, isLoggedIn: true })
      );

      return { user };
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Network error" });
    }
  }
);

//LogOut
export const logOutUser = () => (dispatch) => {
  localStorage.removeItem("persist:auth");
  dispatch(setIsLoggedIn(false));
  dispatch({
    type: "auth/clearUserState",
  });
};

//forget password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/users/forgetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ status: response.status, ...errorData });
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Network error" });
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/users/verifyOtp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ status: response.status, ...errorData });
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Network error" });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/users/resetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, newPassword }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ status: response.status, ...errorData });
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ status: 500, message: "Network error" });
    }
  }
);
