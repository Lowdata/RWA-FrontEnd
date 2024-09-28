import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  error: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearForm(state) {
      state.email = "";
      state.password = "";
      state.error = "";
    },
  },
});

export const { setEmail, setPassword, setError, clearForm } = formSlice.actions;
export default formSlice.reducer;
