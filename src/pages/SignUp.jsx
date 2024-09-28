import  { useEffect } from "react";
import { coin } from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Container,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validation";
import {
  setEmail,
  setPassword,
  setUserName,
  setReferrerId,
  setError,
  clearForm,
  setRole,
} from "../store/authSlice";
import { registerUser } from "../store/auth/authAction";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";

const SignUp = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authState = useSelector((state) => state.auth);

  const {
    email,
    password,
    userName,
    referrerId,
    error,
    successMessage,
    isLoading,
  } = authState;

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  useEffect(() => {
    const queryParams = getQueryParams(location.search);
    const referId = queryParams.get("referId");
    if (referId) {
      dispatch(setReferrerId(referId));
    }
    dispatch(setRole("user")); // Set the default role to "user"
  }, [location, dispatch]);

  const handleSignUp = () => {
    if (!email || !password || !userName) {
      dispatch(setError("Email, username, and password are required."));
      return;
    }
    if (!validateEmail(email)) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }
    if (!validatePassword(password)) {
      dispatch(
        setError(
          "Password must be at least 6 characters long, include one number, one uppercase letter, and one special character."
        )
      );
      return;
    }
    dispatch(
      registerUser({
        email,
        userName,
        password,
        referrerId,
        role: "user", // Set role as "user" by default during signup
      })
    ).then((response) => {
      if (response.type === "auth/registerUser/fulfilled") {
        alert("Verify your email to activate your account");
        navigate("/");
        dispatch(clearForm());
      }
    });
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
        padding: "20px 2rem",
        overflowX: "hidden",
        boxSizing: "border-box",
        width: "100%",
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

      {/* Sign Up Form Container */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "rgba(26, 43, 72, 0.9)",
          padding: { xs: "2rem", md: "3rem" }, // Adjust padding for smaller screens
          borderRadius: "15px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
          border: "2px solid #e2b857",
          zIndex: 1,
        }}
      >
        {/* Header with logo or icon */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img
            src={coin}
            alt="Wealth Icon"
            style={{ width: "90px", marginBottom: "1rem" }}
          />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "#e2b857",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Sign Up
          </Typography>
        </Box>

        {/* Form Inputs */}
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
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={userName}
          onChange={(e) => dispatch(setUserName(e.target.value))}
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
        <TextField
          label="Referrer ID (optional)"
          fullWidth
          margin="normal"
          value={referrerId}
          onChange={(e) => dispatch(setReferrerId(e.target.value))}
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

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}

        {/* Success Alert */}
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            <AlertTitle>Success</AlertTitle>
            {successMessage}
          </Alert>
        )}

        {/* Sign Up Button */}
        <Box mt={2}>
          <Button
            onClick={handleSignUp}
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
            {isLoading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </Box>

        {/* Social Login Section */}
        <Box mt={3} textAlign="center">
          <Typography variant="body1" sx={{ color: "#e2b857", mb: 1 }}>
            Other Sign Up options:
          </Typography>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Button
              variant="outlined"
              sx={{
                color: "#4285F4",
                borderColor: "#4285F4",
                mx: 1,
                mb: 1,
                flex: { xs: "1 1 45%", sm: "1 1 30%" }, // Responsive flex
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
              sx={{
                color: "#3b5998",
                borderColor: "#3b5998",
                mx: 1,
                mb: 1,
                flex: { xs: "1 1 45%", sm: "1 1 30%" }, // Responsive flex
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
              sx={{
                color: "#1DA1F2",
                borderColor: "#1DA1F2",
                mx: 1,
                mb: 1,
                flex: { xs: "1 1 45%", sm: "1 1 30%" }, // Responsive flex
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
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
