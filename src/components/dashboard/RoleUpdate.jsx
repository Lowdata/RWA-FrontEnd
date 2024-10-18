import { useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  Card,
  Typography,
  Alert,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material"; // Import the InfoOutlined icon
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/editSlice";
import { deductTokens } from "../../store/api/admin";

const RoleUpdate = () => {
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("USDT"); // default currency
  const [infoVisible, setInfoVisible] = useState(false); // State to show/hide the info alert
  const [successMessage, setSuccessMessage] = useState(""); // State to store success message
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  const { publicKey, role, userId } = useSelector((state) => state.auth);
  const { usdtBalance, rwaUsdBalance } = useSelector(
    (state) => state.earnings || {}
  );

  const handleRoleChange = async () => {
    if (!selectedRole) return;
    try {
      const balance = selectedCurrency === "USDT" ? usdtBalance : rwaUsdBalance;
      if (balance < 1) {
        throw new Error("Insufficient balance to change role");
      }

      // Deduct 1 unit of selected currency before updating role
      await dispatch(
        deductTokens({ publicKey, amount: 0.0001, currency: selectedCurrency })
      ).unRWAp();

      // Update the user's role
      await dispatch(
        updateUser({ rwaId: userId, role: selectedRole })
      ).unRWAp();

      setSuccessMessage(`Role updated to ${selectedRole} successfully!`);
    } catch (error) {
      setErrorMessage(`Failed to change role: ${error.message}`);
    }
  };

  const renderRoleOptions = () => {
    if (role === "admin") {
      return null; // Admins don't need to change role
    }

    let roleOptions = [];

    if (role === "user") {
      roleOptions = [
        <MenuItem key="business_partner" value="business_partner">
          Business Partner
        </MenuItem>,
        <MenuItem key="sourcing_partner" value="sourcing_partner">
          Sourcing Partner
        </MenuItem>,
      ];
    }

    if (role === "business_partner") {
      roleOptions = [
        <MenuItem key="sourcing_partner" value="sourcing_partner">
          Sourcing Partner
        </MenuItem>,
      ];
    }

    if (role === "sourcing_partner") {
      roleOptions = [
        <MenuItem key="business_partner" value="business_partner">
          Business Partner
        </MenuItem>,
      ];
    }

    return (
      <Select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        style={roleUpdateStyles.select}
      >
        {roleOptions}
      </Select>
    );
  };

  const handleInfoClick = () => {
    setInfoVisible(true); // Show the info alert when the button is clicked
  };

  const roleUpdateStyles = {
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
      backgroundColor: "#112240", // Darker metal blue for card background
      borderRadius: "18px",
      border: "2px solid #CBA135", // Softer gold border
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.6)", // Stronger shadow for depth
      width: "80%",
      maxWidth: "600px",
      marginBottom: "20px",
      marginRight: "50px",
      marginTop: "12px",
      color: "#CBA135", // Light gold text for a premium feel
    },
    title: {
      marginBottom: "10px",
      color: "#CBA135", // Soft gold title to align with card styles
    },
    select: {
      marginBottom: "20px",
      minWidth: "200px",
      backgroundColor: "#1C1C1E", // Dark matte background for select input
      color: "#F5E6C5", // Soft gold for select text
    },
    button: {
      marginTop: "10px",
      backgroundColor: "#CBA135", // Gold button for consistency
      color: "#1C1C1E", // Dark text on gold
      boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)", // Subtle glow effect
      "&:hover": {
        backgroundColor: "#CBA135", // Keep the same gold on hover
        boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)", // Softer glow on hover
      },
    },
    infoButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
      color: "#CBA135", // Gold color for icon
    },
    iconButton: {
      marginLeft: "8px",
      cursor: "pointer",
      color: "#CBA135", // Gold icon
    },
    alert: {
      marginTop: "10px", // Add margin for the alert
      width: "100%",
    },
  };

  return (
    <Card style={roleUpdateStyles.card}>
      <Typography variant="h6" style={roleUpdateStyles.title}>
        Update Role & Select Currency
      </Typography>

      {renderRoleOptions()}

      <Select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        style={roleUpdateStyles.select}
      >
        <MenuItem value="USDT">USDT</MenuItem>
        <MenuItem value="RWAUSD">RWAUSD</MenuItem>
      </Select>

      <Button
        variant="contained"
        onClick={handleRoleChange}
        style={roleUpdateStyles.button}
      >
        Change Role
      </Button>

      <div style={roleUpdateStyles.infoButton}>
        <Typography variant="body2">More Info</Typography>
        <InfoOutlined
          style={roleUpdateStyles.iconButton}
          onClick={handleInfoClick}
        />
      </div>

      {/* Display the Material-UI Alert for info */}
      {infoVisible && (
        <Alert
          variant="filled"
          severity="info"
          onClose={() => setInfoVisible(false)} // Add close button
          style={roleUpdateStyles.alert}
        >
          Update your role as a business partner and sourcing partner in $100
          and earn profits. List your business and products with REAL WORLD
          ASSET CORP.
        </Alert>
      )}

      {/* Display success or error messages */}
      {successMessage && (
        <Alert
          variant="filled"
          severity="success"
          onClose={() => setSuccessMessage("")}
          style={roleUpdateStyles.alert}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          variant="filled"
          severity="error"
          onClose={() => setErrorMessage("")}
          style={roleUpdateStyles.alert}
        >
          {errorMessage}
        </Alert>
      )}
    </Card>
  );
};

export default RoleUpdate;
