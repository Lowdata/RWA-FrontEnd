import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import { resetPassword, verifyOtp } from "../store/auth/authAction";
import { setError } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../utils/validation";

const OTPScreen = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const email = useSelector((state) => state.auth.email);
  const navigate = useNavigate();

  const handleOtpSubmit = () => {
    if (newPassword !== confirmPassword) {
      dispatch(setError("Passwords do not match"));
      return;
    }

    if (!validatePassword(newPassword)) {
      dispatch(
        setError(
          "Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character."
        )
      );
      return;
    }

    dispatch(verifyOtp({ email, otp }))
      .unRWAp()
      .then(() => {
        handleResetPassword();
      })
      .catch((err) => {
        console.log("Error verifying OTP:", err.message);
      });
  };

  const handleResetPassword = () => {
    dispatch(resetPassword({ email, newPassword }))
      .unRWAp()
      .then(() => {
        alert("Password reset successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error resetting password:", err.message);
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a2b48 0%, #121212 100%)", // Background gradient
        display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center", // Center horizontally
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

      {/* OTP Form Container */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(26, 43, 72, 0.9)", // Semi-transparent background
          padding: "3rem",
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)", // Enhanced shadow
          border: "2px solid #e2b857", // Gold border
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
          Reset Password
        </Typography>

        {/* Error Message */}
        {error && (
          <Typography sx={{ color: "red", textAlign: "center", mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box component="form" sx={{ mt: 2 }}>
          {/* OTP Input */}
          <TextField
            label="OTP *"
            fullWidth
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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

          {/* Email Display (Disabled) */}
          <TextField
            label="Email *"
            fullWidth
            margin="normal"
            value={email}
            disabled
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

          {/* New Password Input */}
          <TextField
            label="New Password *"
            type="password"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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

          {/* Confirm Password Input */}
          <TextField
            label="Confirm Password *"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button
            color="primary"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#e2b857", // Gold color
              color: "#1a2b48", // Dark text
              py: 1.5,
              boxShadow: "0 4px 15px rgba(226, 184, 87, 0.5)",
              "&:hover": {
                backgroundColor: "#d4a74c",
              },
            }}
            disabled={isLoading}
            onClick={handleOtpSubmit}
          >
            {isLoading ? <CircularProgress size={24} /> : "Reset Password"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OTPScreen;
