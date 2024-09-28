import  { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../store/authSlice";
import { forgotPassword } from "../store/auth/authAction";
import { validateEmail } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state to track form input and loading state
  const [email, setEmailState] = useState("");
  const error = useSelector((state) => state.auth.error);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const isLoading = useSelector((state) => state.auth.isLoading);

  // Handle form submission
  const handleForgotPassword = () => {
    if (!validateEmail(email)) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }

    dispatch(forgotPassword(email));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a2b48 0%, #121212 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0 2rem",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/assets/wealth-pattern.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* Forgot Password Form Container */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(26, 43, 72, 0.9)",
          padding: "3rem",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
          border: "2px solid #e2b857",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#e2b857",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Forgot Password
        </Typography>

        {/* Success Message */}
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {/* Error Message */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Email Input */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmailState(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiInputBase-root": {
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& label.Mui-focused": {
              color: "#e2b857",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#e2b857",
              },
            },
          }}
        />

        {/* Submit Button */}
        <Box mt={3}>
          <Button
            onClick={handleForgotPassword}
            color="primary"
            variant="contained"
            fullWidth
            disabled={isLoading}
            sx={{
              backgroundColor: "#e2b857",
              color: "#1a2b48",
              py: 1.5,
              boxShadow: "0 4px 15px rgba(226, 184, 87, 0.5)",
              "&:hover": {
                backgroundColor: "#d4a74c",
              },
            }}
          >
            {isLoading ? <CircularProgress size={24} /> : "Reset Password"}
          </Button>
        </Box>

        {/* Back to Login */}
        <Typography
          variant="body2"
          sx={{ color: "#e2b857", mt: 2, textAlign: "center" }}
        >
          Remember your password?{" "}
          <Button
            onClick={() => navigate("/login")}
            sx={{
              textDecoration: "underline",
              color: "#e2b857",
              fontWeight: "bold",
            }}
          >
            Back to Login
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
