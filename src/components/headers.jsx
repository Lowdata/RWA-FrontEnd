import  { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../assets/images";
import { logOutUser } from "../store/auth/authAction";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile screens
  const isMediumDesktop = useMediaQuery(theme.breakpoints.down("lg")); // Mid-sized desktop screens
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      dispatch(logOutUser());
      navigate("/");
    } else {
      navigate("/login"); // Navigate to full-page login
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleSignUpNavigate = () => {
    navigate("/register");
    handleMenuClose();
  };

  const menuItems = isLoggedIn
    ? [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Learn More", path: "/learnmore" },
        { label: "Dashboard", path: "/dashboard" },
        {
          label: "WhitePaper",
          onClick: () =>
            window.open(
              "https://drive.google.com/file/d/1Biawk38ez0I69GpjNDmusTwUdnlRkdkq/view?usp=drive"
            ),
        },
        { label: "Develop", path: "/develop" },
        { label: "Participate", path: "/participate" },
        { label: "Marketplace", path: "/marketplace" },

        { label: "Packages", path: "/package" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Learn More", path: "/learnmore" },
        {
          label: "WhitePaper",
          onClick: () =>
            window.open(
              "https://drive.google.com/file/d/1Biawk38ez0I69GpjNDmusTwUdnlRkdkq/view?usp=drive"
            ),
        },
        { label: "Develop", path: "/develop" },
        { label: "Participate", path: "/participate" },
        { label: "Sign Up", path: "/register" },
      ];

  const additionalItems = [];

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "#1c1f2a", // Matte dark blue
          color: "#f5f5f5", // Soft white
          fontFamily: "Roboto, sans-serif",
          padding: isMobile ? "0 10px" : "0 40px",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.5)", // Soft shadow for matte effect
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isMobile || isMediumDesktop ? "10px 0" : "20px 0",
          }}
        >
          {/* Logo and Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Button
              onClick={() => handleNavigate("/")}
              style={{ display: "flex", alignItems: "center", padding: 0 }}
            >
              <img
                src={logo}
                alt="Real World Asset Corp"
                style={{
                  height: isMobile ? 60 : 80,
                  marginRight: isMobile || isMediumDesktop ? 5 : 15,
                }}
              />
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile || isMediumDesktop ? "1rem" : "1rem",
                  color: "#f5f5f5",
                }}
              >
                {isMobile || isMediumDesktop ? "RWA" : "Real World Asset Corp"}
              </Typography>
            </Button>
          </div>

          {/* Mobile or Resized Desktop Menu */}
          {isMobile || isMediumDesktop ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenuOpen}
                style={{
                  color: "#f5f5f5",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {[...menuItems, ...additionalItems].map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() =>
                      item.path ? handleNavigate(item.path) : item.onClick?.()
                    }
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            // Desktop Menu (full width)
            <div
              style={{
                display: "flex",
                gap: "20px",
              }}
            >
              {[...menuItems, ...additionalItems].map((item) => (
                <Button
                  key={item.label}
                  onClick={() =>
                    item.path
                      ? handleNavigate(item.path)
                      : handleSignUpNavigate()
                  }
                  style={{
                    color: "#f5f5f5", // Soft white for buttons
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "1rem",
                    textTransform: "none",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                    fontWeight: 500,
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#333",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}

          {/* Login/Logout Button */}
          <Button
            onClick={handleLoginLogout}
            style={{
              color: "#f5f5f5", // White text for the button
              backgroundColor: "#3b5998", // Dark blue login button
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
              padding: "8px 16px",
              textTransform: "none",
              borderRadius: "4px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#2e466c", // Slightly darker on hover
              },
            }}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
