import { useState, useEffect } from "react";
import { profile } from "../../assets/images";
import {
  Button,
  Snackbar,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserEarnings, fetchUserBalance } from "../../store/earningSlice";
import ConnectButton from "./ConnectButton";
import RoleUpdate from "./RoleUpdate";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [showNotification, setShowNotification] = useState(false);

  const { publicKey, privateKey, userId, userName, role, approval } =
    useSelector((state) => state.auth);

  const {
    rank = "Unranked",
    totalEarnings = "0.00",
    referralEarnings = "0.00",
    matrixEarnings = "0.00",
    nativeBnbBalance,
    usdtBalance,
    rwaUsdBalance,
    rwaTokenBalance,
  } = useSelector((state) => state.earnings || {});

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserBalance(userId));
      dispatch(fetchUserEarnings(userId));
    }
  }, [dispatch, userId]);

  const tokenBalances = {
    RWA: rwaTokenBalance,
    RWAUSD: rwaUsdBalance,
    USDT: usdtBalance,
    BNB: nativeBnbBalance,
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

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleReferralCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Referral link copied to clipboard!");
    });
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
    navigate("/admin");
  };

  // Updated styles with matte, gold, blue, and dark metal
  // Updated styles
  const profileStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: "20px",
      color: "#E0E0E0", // Light text
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
      backgroundColor: "#112240", // Darker metal blue for card background
      borderRadius: "12px",
      border: "2px solid #CBA135", // Softer gold border
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.6)", // Stronger shadow for depth
      marginBottom: "20px",
      color: "#F5E6C5", // Softer gold text for luxury feel
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      marginRight: "15px",
      border: "2px solid #CBA135", // Softer gold border for the avatar
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
      color: "#777", // Subtle gray for muted text
    },
    userRole: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#ADD8E6", // Matte blue for role text
      marginTop: "8px",
    },
    publicKey: {
      fontSize: "13px",
      color: "#ADD8E6",
      marginTop: "8px",
      wordBreak: "break-all",
      fontWeight: "bold",
    },
    privateKeyButton: {
      marginTop: "10px",
      backgroundColor: "#CBA135", // Softer gold button
      color: "#1C1C1E", // Dark text on gold
      boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)", // Subtle glow effect
      "&:hover": {
        backgroundColor: "#CBA135", // Same gold button on hover
        boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)", // Softer glow on hover
      },
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
      backgroundColor: "#112240", // Darker metal blue for the card
      borderRadius: "12px",
      border: "2px solid #CBA135", // Softer gold border for the card
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.6)", // Deep shadow for rich look
      width: "100%",
      maxWidth: "600px",
      color: "#CBA135", // Softer gold text for rich appearance
    },
    balance: {
      fontSize: "26px",
      fontWeight: "700",
      fontFamily: "'Merriweather', serif",
      color: "#CBA135", // Softer gold balance text
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
      backgroundColor: "#CBA135", // Softer gold button
      color: "#1C1C1E", // Dark text on gold
      boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)", // Subtle glow effect
      "&:hover": {
        backgroundColor: "#CBA135", // Same gold button on hover
        boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)", // Softer glow on hover
      },
    },
    referralCard: {
      marginTop: "20px",
      width: "100%",
      maxWidth: "600px",
      backgroundColor: "#112240", // Darker metal blue for card background
      borderRadius: "12px",
      border: "2px solid #CBA135", // Softer gold border
      boxShadow: "0 8px 18px rgba(0, 0, 0, 0.6)", // Stronger shadow for depth
      padding: "20px",
      textAlign: "center",
      color: "#CBA135", // Softer gold text for referral card
    },
    referralHeader: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    referralLink: {
      fontSize: "14px",
      fontWeight: "400",
      color: "#ADD8E6", // Blue for the link
      wordBreak: "break-all",
      marginTop: "10px",
    },
    adminButton: {
      marginTop: "60px",
      backgroundColor: "#CBA135", // Softer gold button
      color: "#1C1C1E", // Dark text
      marginRight: "450px",
      boxShadow: "0 0 8px rgba(203, 161, 53, 0.5)", // Subtle glow effect
      "&:hover": {
        backgroundColor: "#CBA135", // Same gold on hover
        boxShadow: "0 0 12px rgba(203, 161, 53, 0.7)", // Subtle hover glow
      },
    },
  };


  return (
    <div style={profileStyles.container}>
      <div style={profileStyles.userInfo}>
        <img src={profile} alt="User Avatar" style={profileStyles.avatar} />
        <div style={profileStyles.userDetails}>
          <div style={profileStyles.userName}>{userName}</div>
          <div style={profileStyles.userId}>Id-{userId}</div>
          <div style={profileStyles.userRole}>Role: {role}</div>
          <div style={profileStyles.publicKey}>Public Key: {publicKey}</div>
          <Button
            variant="contained"
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

      <RoleUpdate />

      <Card style={profileStyles.netWorthCard}>
        <CardContent>
          <Typography variant="h5" style={profileStyles.balance}>
            Total Earnings: ${totalEarnings}
          </Typography>
          <Typography>Referral Earnings: ${referralEarnings}</Typography>
          <Typography>Matrix Earnings: ${matrixEarnings}</Typography>
        </CardContent>
        <div style={profileStyles.buttons}>
          <Button
            variant="contained"
            style={profileStyles.button}

          >
            <ConnectButton />
          </Button>
          <Button
            variant="contained"
            style={profileStyles.button}
            onClick={handleWithdrawClick}
          >
            Withdraw
          </Button>
        </div>
      </Card>

      <div style={profileStyles.referralCard}>
        <div style={profileStyles.referralHeader}>Your Referral Link</div>
        <div style={profileStyles.referralLink}>{referralLink}</div>
        <Button
          variant="contained"
          style={profileStyles.privateKeyButton}
          onClick={handleReferralCopy}
        >
          Copy Referral Link
        </Button>
      </div>

      {role === "admin" && (
        <Button
          variant="contained"
          style={profileStyles.adminButton}
          onClick={handleAdminDashboardClick}
        >
          Admin Dashboard
        </Button>
      )}

      {showNotification && (
        <Snackbar
          open={showNotification}
          onClose={() => setShowNotification(false)}
          message="You need to complete the approval process."
        />
      )}
    </div>
  );
};

export default Profile;
