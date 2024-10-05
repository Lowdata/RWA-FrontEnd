/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { profile } from "../../assets/images";
import {
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserEarnings, fetchUserBalance } from "../../store/earningSlice";
import RoleUpdate from "./RoleUpdate";
import PrivateKeyDialog from "./PrivateKeyDialog";
import UserBalanceCard from "./Profile/userBalance";
import EarningsCard from "./Profile/earningsCard";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const [dialogOpen, setDialogOpen] = useState(false);;
  const [showNotification, setShowNotification] = useState(false);

  const { publicKey, userId, userName, role, approval } =
    useSelector((state) => state.auth);

   const {
     rank = "Unranked",
     totalEarnings = "0.00",
     referralEarnings = "0.00",
     matrixEarnings = "0.00",
     revenueEarnings = "0.00",
     leadershipEarnings = "0.00",
     dailyEarnings = "0.00",
     directRoyaltyEarnings = "0.00",
   } = useSelector((state) => state.earnings || {});

   const [balances, setBalances] = useState({
     nativeBnbBalance: "0.0000",
     usdtBalance: "0.0000",
     rwaUsdBalance: "0.0000",
     rwaTokenBalance: "0.0000",
   });

  useEffect(() => {
    const savedBalances = JSON.parse(localStorage.getItem("userBalances"));
    if (savedBalances) {
      setBalances({
        nativeBnbBalance: parseFloat(savedBalances.nativeBnbBalance).toFixed(4),
        usdtBalance: parseFloat(savedBalances.usdtBalance).toFixed(4),
        rwaUsdBalance: parseFloat(savedBalances.rwaUsdBalance).toFixed(4),
        rwaTokenBalance: parseFloat(savedBalances.rwaTokenBalance).toFixed(4),
      });
    }
  }, []);

  useEffect(() => {
    if (userId) {
      // Fetch balances and earnings
      dispatch(fetchUserBalance(userId)).then((action) => {
        // Ensure we update both Redux store and localStorage
        const updatedBalances = action.payload || {};
        setBalances({
          nativeBnbBalance: parseFloat(
            updatedBalances.nativeBnbBalance || 0
          ).toFixed(4),
          usdtBalance: parseFloat(updatedBalances.usdtBalance || 0).toFixed(4),
          rwaUsdBalance: parseFloat(updatedBalances.rwaUsdBalance || 0).toFixed(
            4
          ),
          rwaTokenBalance: parseFloat(
            updatedBalances.rwaTokenBalance || 0
          ).toFixed(4),
        });

        // Save updated balances to localStorage
        localStorage.setItem("userBalances", JSON.stringify(updatedBalances));
      });
      dispatch(fetchUserEarnings(userId));

      const interval = setInterval(() => {
        dispatch(fetchUserBalance(userId));
        dispatch(fetchUserEarnings(userId));
      }, 300000); // 300000ms = 5 minutes

      return () => clearInterval(interval);
    }
  }, [dispatch, userId]);

  const referralLink = `${window.location.origin}/dashboard/?referId=${userId}`;

  useEffect(() => {
    if (
      ["sourcing_partner", "business_partner"].includes(role) &&
      approval === null
    ) {
      setShowNotification(true);
    }
  }, [role, approval]);



  const handleReferralCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      alert("Referral link copied to clipboard!");
    });
  };
  const handleWithdrawClick = () => {
    alert("Withdraw Funds clicked");
  };

  const handlePrivateKeyCopy = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAdminDashboardClick = () => {
    navigate("/admin");
  };
  //whats app share
  const handleWhatsAppShare = () => {
    const message = `Check out this great platform! Here's my referral link: ${referralLink}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Function to handle Email sharing
  const handleEmailShare = () => {
    const subject = "Join this amazing platform!";
    const body = `Hello,\n\nCheck out this great platform! Here's my referral link: ${referralLink}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
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
    accountBalanceContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px", // Add space between currency selector and balance display
      marginBottom: "20px",
    },
    accountBalance: {
      fontSize: "22px",
      fontWeight: "600",
      color: "#CBA135", // Softer gold text
    },
    selectDropdown: {
      minWidth: "200px",
    },
    shareButtonsContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "600px",
      marginTop: "20px",
    },
    shareButton: {
      flexGrow: 1,
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
      marginTop:"20px"
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

          {/* Render the PrivateKeyDialog */}
          <PrivateKeyDialog open={dialogOpen} onClose={handleDialogClose} />
        </div>
        <div style={profileStyles.rank}>
          <span>🏆 Rank: {rank}</span>
        </div>
      </div>

      <RoleUpdate />

      {/* Render the EarningsCard */}
      <EarningsCard
        totalEarnings={totalEarnings}
        referralEarnings={referralEarnings}
        matrixEarnings={matrixEarnings}
        revenueEarnings={revenueEarnings}
        leadershipEarnings={leadershipEarnings}
        dailyEarnings={dailyEarnings}
        directRoyaltyEarnings={directRoyaltyEarnings}
        styles={profileStyles}
      />

      {/* Render the UserBalanceCard */}
      <UserBalanceCard balances={balances} styles={profileStyles} />

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
      <div style={profileStyles.shareButtonsContainer}>
        <Button
          variant="contained"
          style={profileStyles.shareButton}
          onClick={handleWhatsAppShare}
        >
          Invite via WhatsApp
        </Button>
        <Button
          variant="contained"
          style={profileStyles.shareButton}
          onClick={handleEmailShare}
        >
          Invite via Email
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
    </div>
  );
};

export default Profile;