/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { fetchUserEarnings, fetchUserBalance } from "../../store/earningSlice";
import "./UserProfile.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import RoleUpdate from "./RoleUpdate";
// Utility function to create avatar initials
export const stringAvatar = (name) => {
  if (!name) return {};
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");
  return {
    children: initials,
  };
};

const UserProfile = () => {
  const dispatch = useDispatch();
  const [dialogOpen, setDialogOpen] = useState(false);

  const { publicKey, userId, userName, role } = useSelector(
    (state) => state.auth
  );

  // Earnings and Balances
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

  // Fetch user data on component mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserBalance(userId)).then((action) => {
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
        localStorage.setItem("userBalances", JSON.stringify(updatedBalances));
      });
      dispatch(fetchUserEarnings(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <Profile
          userName={userName}
          rank={rank}
          publicKey={publicKey}
          role={role}
        />
        <ReferralLink userId={userId} />
        {role === "user" && <RoleUpdate />}
      </div>

      <div className="stats-section">
        <StatsPanel
          totalEarnings={totalEarnings}
          referralEarnings={referralEarnings}
          matrixEarnings={matrixEarnings}
          revenueEarnings={revenueEarnings}
          leadershipEarnings={leadershipEarnings}
          dailyEarnings={dailyEarnings}
          directRoyaltyEarnings={directRoyaltyEarnings}
        />
      </div>

      <div className="balance-section">
        <UserDetails userName={userName} userId={userId} />
        <BalanceCard balances={balances} />
        <Announcement />
        <AdminButton role={role} />
      </div>
    </div>
  );
};

// Profile Component
// Profile Component
const Profile = ({ userName, rank, publicKey, role }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Function to copy public key to clipboard
  const handleCopyPublicKey = () => {
    navigator.clipboard.writeText(publicKey);
    setSnackbarOpen(true); // Show snackbar on copy
  };

  // Function to close the snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="profile-card">
      <Avatar
        sx={{
          bgcolor: "#DC4D01", // Custom background color for the avatar
          border: "2px solid  #CBA135", // Gold-colored border
          width: "50px", // Adjusted size to match previous design
          height: "50px",
        }}
        {...stringAvatar(userName)}
      />
      <h2>{userName}</h2>
      <p>Role: {role}</p>
      
      {/* Display truncated public key */}
      <div className="public-key">
        <p>Public Key: {`${publicKey.slice(0, 6)}...${publicKey.slice(-6)}`}</p>
        
        {/* Tooltip and IconButton to copy full key */}
        <Tooltip title="Copy Public Key">
          <IconButton onClick={handleCopyPublicKey}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </div>

      <p>Rank: {rank}</p>

      {/* Snackbar to show a confirmation message when the key is copied */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Public key copied!"
      />
    </div>
  );
};


// StatsPanel Component
const StatsPanel = ({
  totalEarnings,
  referralEarnings,
  matrixEarnings,
  revenueEarnings,
  leadershipEarnings,
  dailyEarnings,
  directRoyaltyEarnings,
}) => (
  <div className="stats-panel">
    <div className="stat-item">
      <p>Total Earnings</p>
      <h3>{totalEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Referral Earnings</p>
      <h3>{referralEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Matrix Earnings</p>
      <h3>{matrixEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Revenue Earnings</p>
      <h3>{revenueEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Leadership Earnings</p>
      <h3>{leadershipEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Daily Earnings</p>
      <h3>{dailyEarnings}</h3>
    </div>
    <div className="stat-item">
      <p>Direct Royalty Earnings</p>
      <h3>{directRoyaltyEarnings}</h3>
    </div>
  </div>
);

// ReferralLink Component
const ReferralLink = ({ userId }) => {
  const referralLink = `${window.location.origin}/register/?referId=${userId}`;

  // Copy referral link to clipboard
  const handleReferralCopy = () => {
    navigator.clipboard.writeText(referralLink);
  };

  // WhatsApp sharing link
  const handleWhatsAppShare = () => {
    const whatsappLink = `https://wa.me/?text=Join me on this platform! Register using my referral link: ${referralLink}`;
    window.open(whatsappLink, "_blank");
  };

  // Email sharing link
  const handleEmailShare = () => {
    const emailSubject = "Join this amazing platform!";
    const emailBody = `Join me on this platform! Register using my referral link: ${referralLink}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, "_self");
  };

  return (
    <div className="referral-link">
      <h3>Referral Link</h3>
      <input type="text" value={referralLink} readOnly />
      <div className="referral-buttons">
        <button onClick={handleReferralCopy}>Copy</button>
        <button onClick={handleWhatsAppShare}>Share on WhatsApp</button>
        <button onClick={handleEmailShare}>Share via Email</button>
      </div>
    </div>
  );
};

// UserDetails Component
const UserDetails = ({ userName, userId }) => (
  <div className="details-card">
    <h3>My Details</h3>
    <p>UserId: {userId}</p>
    <p>Name: {userName}</p>
  </div>
);

// BalanceCard Component to show balance details
const BalanceCard = ({ balances }) => (
  <div className="balance-card">
    <h3>Account Balances</h3>
    <p>BNB: {balances.nativeBnbBalance}</p>
    <p>USDT: {balances.usdtBalance}</p>
    <p>RWA USD: {balances.rwaUsdBalance}</p>
    <p>RWA Token: {balances.rwaTokenBalance}</p>
  </div>
);

// DepositButton Component
// AdminButton Component
const AdminButton = ({ role }) => {
  const handleAdminRedirect = () => {
    if (role === "admin") {
      window.location.href = "/admin"; // Redirect to the admin page
    }
  };

  if (role !== "admin") {
    return null; // Hide the button if the user is not an admin
  }

  return (
    <div className="admin-section">
      <button className="admin-button" onClick={handleAdminRedirect}>
        Admin
      </button>
    </div>
  );
};

const announcements = [
  "Cryptocurrency by market capitalization. Unlike fiat currency, RWA is created, distributed, traded, and stored using a decentralized ledger.",
  "New feature: Now you can trade RWA with minimum fees for the next 7 days.",
  "Update: The platform will undergo maintenance on Sunday, 14th October from 1 AM to 4 AM UTC.",
];

const Announcement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="announcement-card">
      <h3>Announcement</h3>
      <TransitionGroup className="announcement-list">
        <CSSTransition
          key={currentIndex}
          timeout={500}
          classNames="announcement-item"
        >
          <p>{announcements[currentIndex]}</p>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default UserProfile;
