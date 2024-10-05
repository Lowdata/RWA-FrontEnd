import { useEffect, useState } from "react";

// Helper function to generate random notifications
const getRandomNotification = () => {
  const actions = [
    { action: "Bought RWAUSD", withNumber: true },
    { action: "Bought RWA Token", withNumber: true },
    { action: "Joined RWA Corp.", withNumber: false },
  ];

  const countries = [
    { flag: "https://flagcdn.com/us.svg", name: "USA" },
    { flag: "https://flagcdn.com/gb.svg", name: "UK" },
    { flag: "https://flagcdn.com/de.svg", name: "Germany" },
    { flag: "https://flagcdn.com/fr.svg", name: "France" },
    { flag: "https://flagcdn.com/jp.svg", name: "Japan" },
    { flag: "https://flagcdn.com/in.svg", name: "India" },
    { flag: "https://flagcdn.com/br.svg", name: "Brazil" },
    { flag: "https://flagcdn.com/nl.svg", name: "Netherlands" },
    { flag: "https://flagcdn.com/it.svg", name: "Italy" },
    { flag: "https://flagcdn.com/es.svg", name: "Spain" },
  ];

  const users = [
    "John Doe",
    "Emily Johnson",
    "Sophia Davis",
    "Liam Smith",
    "Lucas White",
    "Amelia Brown",
    "David Black",
    "Rajesh Kumar",
    "Anjali Mehta",
    "Aarav Patel",
    "Neha Sharma",
    "Thomas Müller",
    "Olivia Rossi",
    "Élodie Durand",
    "Marco Verdi",
  ];

  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomNumber = randomAction.withNumber
    ? Math.floor(Math.random() * 10000 + 1)
    : null;

  // Generate a random wallet address
  const walletAddress = `xxxxx${Math.random().toString(36).substr(2, 6)}`;

  return {
    user: randomUser,
    country: randomCountry,
    action: randomAction.action,
    number: randomNumber,
    walletAddress, // Add the wallet address here
  };
};

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prevNotifications) => {
        const newNotification = getRandomNotification();
        return [newNotification, ...prevNotifications.slice(0, 4)]; // Show last 5 notifications
      });
    }, 3000); // New notification every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#F5B63D", 
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        Latest User Activity
      </h3>
      <ul style={{ listStyle: "none", padding: "20px", margin: 0 }}>
        {notifications.map((notif, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#1A2135", // Dark background (original style)
              color: "#F5F5F5", // White text
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.3)", // Shadow for the whole item
              opacity: 0, // Start hidden for fade-in
              transform: "translateY(-10px)", // Start from above for smooth drop-in
              animation: "fadeIn 1s forwards", // Trigger fade-in animation
            }}
          >
            {/* User Name + Flag (aligned closer together) */}
            <span
              style={{
                flexBasis: "30%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                fontSize: "16px", // Default font size
                fontWeight: "bold", // Default font weight
              }}
            >
              {notif.user}
              <img
                src={notif.country.flag}
                alt={notif.country.name}
                style={{
                  width: "25px",
                  height: "15px",
                  marginLeft: "10px", // Reduced margin between flag and name
                }}
              />
            </span>

            {/* Wallet Address centered with enhanced shadow */}
            <span
              style={{
                flexBasis: "20%",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#2C2E3A", // Slightly different background for contrast
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)", // Stronger shadow
                fontWeight: "bold",
                color: "#F5F5F5",
                fontSize: "16px", // Default font size for wallet
              }}
              className="wallet-address"
            >
              Wallet: {notif.walletAddress} {/* Display the wallet address */}
            </span>

            {/* Action and Random Number (aligned to the right) */}
            <span
              style={{ flexBasis: "30%", textAlign: "right", fontSize: "16px" }}
            >
              {notif.action} {notif.number && `${notif.number}`}
            </span>
          </li>
        ))}
      </ul>

      {/* Adding Keyframes for Animation */}
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive styles */
          @media (max-width: 600px) {
            h3 {
              font-size: 18px; /* Smaller heading size */
            }

            .wallet-address {
              font-size: 14px; /* Smaller wallet address size */
              font-weight: normal; /* Unbold wallet address */
            }

            li {
              padding: 8px; /* Adjust padding for smaller screens */
            }
          }

          @media (max-width: 400px) {
            .wallet-address {
              display: none; /* Hide wallet address on smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
};

export default UserNotifications;
