import { useDispatch, useSelector } from "react-redux";
import { useState,useRef } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Link,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { validateEmail, validatePassword } from "../utils/validation";
import { setEmail, setPassword, setError, clearForm } from "../store/authSlice";
import { loginUser } from "../store/auth/authAction";
import { useNavigate } from "react-router-dom";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);
   const handleCaptchaExpired = () => {
     // Reset the verification state when CAPTCHA expires
     setVerified(false);
     alert("CAPTCHA expired. Please complete it again.");
   };

  const onchange = (value) => {
    console.log("CAPTCHA value", value);
    setVerified(true);
  };

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }
    if (!validatePassword(password)) {
      dispatch(setError("Incorrect Password"));
      return;
    }

    dispatch(loginUser({ email, password }))
      .unRWAp()
      .then(() => {
        navigate("/dashboard");
        dispatch(clearForm());
      })
      .catch((err) => {
        console.error("Error logging in:", err);
      });
  };

  const handleForgotPasswordRedirect = () => {
    navigate("/forgot-password");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a2b48 0%, #121212 100%)", // Same theme as SignUp page
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

      {/* Login Form Container */}
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
          Log In
        </Typography>

        {/* Error Display */}
        {error && (
          <Typography sx={{ color: "red", textAlign: "center", mb: 2 }}>
            {error}
          </Typography>
        )}

        {/* Email Input */}
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
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

        {/* Password Input */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
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

        {/* Forgot Password */}
        <Link
          component="button"
          variant="body2"
          onClick={handleForgotPasswordRedirect}
          sx={{
            color: "#e2b857",
            display: "block",
            marginTop: "10px",
            marginBottom: "10px",
            textAlign: "right",
          }}
        >
          Forgot Password?
        </Link>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onchange}
          ref={recaptchaRef}
          onExpired={handleCaptchaExpired}
        />

        {/* Login Button */}
        <Box mt={3}>
          <Button
            onClick={handleLogin}
            color="primary"
            variant="contained"
            fullWidth
            disabled={!verified}
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
            {isLoading ? <CircularProgress size={24} /> : "Log In"}
          </Button>
        </Box>

        {/* Social Login Buttons */}
        <Box mt={3} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#4285F4",
              borderColor: "#4285F4",
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(66, 133, 244, 0.1)",
                borderColor: "#4285F4",
              },
            }}
            startIcon={<GoogleIcon />}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#3b5998",
              borderColor: "#3b5998",
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(59, 89, 152, 0.1)",
                borderColor: "#3b5998",
              },
            }}
            startIcon={<FacebookIcon />}
          >
            Facebook
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              color: "#1DA1F2",
              borderColor: "#1DA1F2",
              mx: 1,
              "&:hover": {
                backgroundColor: "rgba(29, 161, 242, 0.1)",
                borderColor: "#1DA1F2",
              },
            }}
            startIcon={<TwitterIcon />}
          >
            Twitter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
