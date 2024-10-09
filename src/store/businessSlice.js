import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API call to register as a business partner
export const registerBusinessPartner = createAsyncThunk(
  "business/registerBusinessPartner",
  async (businessData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/businessPartner/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(businessData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to register business partner");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// API call to submit a product
export const submitProduct = createAsyncThunk(
  "business/submitProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.entries(productData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(
        "https://rwa-backend.onrender.com/businessPartner/addProduct",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit product");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state for the business slice
const initialState = {
  businessRegistrationStatus: null,
  productSubmissionStatus: null,
  loading: false,
  error: null,
};

// Business slice
const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register business partner reducers
    builder
      .addCase(registerBusinessPartner.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.businessRegistrationStatus = null;
      })
      .addCase(registerBusinessPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.businessRegistrationStatus = action.payload;
      })
      .addCase(registerBusinessPartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Submit product reducers
    builder
      .addCase(submitProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.productSubmissionStatus = null;
      })
      .addCase(submitProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productSubmissionStatus = action.payload;
      })
      .addCase(submitProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default businessSlice.reducer;
