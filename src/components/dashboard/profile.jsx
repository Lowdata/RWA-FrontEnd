import  { useState, useEffect } from "react";
import { profile } from "../../assets/images";

import {
  Button,
  Snackbar,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserEarnings } from "../../store/earningSlice";
import ConnectButton from "./ConnectButton";


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showNotification, setShowNotification] = useState(false);

  // Fetching user data from Redux store
  const { publicKey, privateKey, userId, userName, role, approval } =
    useSelector((state) => state.auth);

  // Safely destructure earnings state with default values
  const {
    rank = "Unranked",
    totalEarnings = "0.00",
    referralEarnings = "0.00",
    matrixEarnings = "0.00",
  } = useSelector((state) => state.earnings || {});

  const tokenOptions = ["RWA", "RWAUSD", "USDT", "BNB"];
  const tokenBalances = {
    RWA: 1.23456789,
    RWAUSD: 150.12,
    USDT: 2000.45,
    BNB: 0.34567891,
  };

  const referralLink = `${window.location.origin}/dashboard/?referId=${userId}`;

  useEffect(() => {
    if (
      ["sourcing_partner", "business_partner"].includes(role) &&
      approval === null
    ) {
      setShowNotification(true);
    }
  }, [role, approval]);

  // Fetching user earnings when the component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserEarnings(userId)); // Fetch user earnings from API and store in Redux
    }
  }, [dispatch, userId]);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleReferralCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Referral link copied to clipboard!");
    });
  };

  const handleDepositClick = () => {
    alert("Deposit Funds clicked");
  };

  const handleWithdrawClick = () => {
    alert("Withdraw Funds clicked");
  };

  const handlePrivateKeyCopy = () => {
    navigator.clipboard.writeText(privateKey).then(() => {
      alert("Private key copied to clipboard!");
    });
  };

  const handleAdminDashboardClick = () => {
    navigate("/admin"); // Navigate to the admin dashboard
  };

  const profileStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    },
    walletConnection: {
      marginBottom: "20px",
      textAlign: "center",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "600px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
      marginBottom: "20px",
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginRight: "15px",
    },
    userDetails: {
      flexGrow: "1",
    },
    userName: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    userId: {
      fontSize: "14px",
      color: "#777",
    },
    userRole: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#00796b",
      marginTop: "8px",
    },
    publicKey: {
      fontSize: "14px",
      color: "#00796b",
      marginTop: "8px",
      wordBreak: "break-all",
    },
    privateKeyButton: {
      marginTop: "10px",
    },
    rank: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "95px",
    },
    netWorthCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "600px",
    },
    balance: {
      fontSize: "26px",
      fontWeight: "700",
      fontFamily: "'Merriweather', serif",
      color: "#2c3e50",
      marginBottom: "10px",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
    },
    button: {
      flexGrow: "1",
      margin: "0 5px",
      padding: "10px 20px",
    },
    select: {
      margin: "10px 0",
      minWidth: "120px",
    },
    referralCard: {
      marginTop: "20px",
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.08)",
      padding: "20px",
      textAlign: "center",
    },
    referralHeader: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#00796b",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    emoji: {
      marginLeft: "5px",
    },
    referralText: {
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "10px",
      color: "#333",
    },
    referralLink: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#2c3e50",
      wordBreak: "break-all",
      marginTop: "10px",
    },
    referralButton: {
      marginTop: "15px",
    },
    adminButton: {
      marginTop: "60px",
      marginRight: "450px",
    },
  };

  return (
    <div style={profileStyles.container}>
      <ConnectButton />
      {/* User Info */}
      <div style={profileStyles.userInfo}>
        <img src={profile} alt="User Avatar" style={profileStyles.avatar} />
        <div style={profileStyles.userDetails}>
          <div style={profileStyles.userName}>{userName}</div>
          <div style={profileStyles.userId}>Id-{userId}</div>
          <div style={profileStyles.userRole}>Role: {role}</div>
          <div style={profileStyles.publicKey}>Public Key: {publicKey}</div>
          <Button
            variant="contained"
            color="primary"
            style={profileStyles.privateKeyButton}
            onClick={handlePrivateKeyCopy}
          >
            Copy Private Key
          </Button>
        </div>
        <div style={profileStyles.rank}>
          <span>🏆 Rank: {rank}</span>
        </div>
      </div>

      {/* Earnings Info */}
      <Card style={profileStyles.netWorthCard}>
        <CardContent>
          <Typography variant="h5" style={profileStyles.balance}>
            Total Earnings: ${totalEarnings}
          </Typography>
          <Typography>Referral Earnings: ${referralEarnings}</Typography>
          <Typography>Matrix Earnings: ${matrixEarnings}</Typography>
        </CardContent>
      </Card>

      {/* Net Worth and Token Balances */}
      <div style={profileStyles.netWorthCard}>
        <Typography style={profileStyles.balance}>Net Worth</Typography>

        <Select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          style={profileStyles.select}
        >
          {tokenOptions.map((token) => (
            <MenuItem key={token} value={token}>
              {token}
            </MenuItem>
          ))}
        </Select>

        {/* Display the Balance based on Selected Token */}
        <div>
          {parseFloat(tokenBalances[selectedCurrency]).toFixed(8)}{" "}
          {selectedCurrency}
        </div>

        <div style={profileStyles.buttons}>
          <Button
            variant="outlined"
            color="primary"
            style={profileStyles.button}
            onClick={handleDepositClick}
          >
            Deposit
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={profileStyles.button}
            onClick={handleWithdrawClick}
          >
            Withdraw
          </Button>
        </div>
      </div>

      {/* Refer a Friend Card */}
      <Card style={profileStyles.referralCard}>
        <CardContent>
          <Typography style={profileStyles.referralHeader}>
            Refer a Friend 🎉 <span style={profileStyles.emoji}>🤝</span>
          </Typography>
          <Typography style={profileStyles.referralText}>
            Share your referral link and earn rewards:
          </Typography>
          <Typography style={profileStyles.referralLink}>
            {referralLink}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={profileStyles.referralButton}
            onClick={handleReferralCopy}
          >
            Copy Referral Link 🚀
          </Button>
        </CardContent>
      </Card>

      {/* Admin Dashboard Button (visible only for admins) */}
      {role === "admin" && (
        <Button
          variant="contained"
          color="secondary"
          style={profileStyles.adminButton}
          onClick={handleAdminDashboardClick}
        >
          Go to Admin Dashboard
        </Button>
      )}

      {/* Notification */}
      <Snackbar
        open={showNotification}
        onClose={() => setShowNotification(false)}
        message="Activate your business partner or sourcing partner role today and unlock profit-making opportunities!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={6000}
      />
    </div>
  );
};

export default Profile;
