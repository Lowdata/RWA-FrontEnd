import React from "react";

// Styles object with blue and white theme
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f4f8", // Light blue-gray background
    minHeight: "100vh", // Ensures it covers full height of the screen
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#007bff", // Blue text
  },
  tableContainer: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    backgroundColor: "#ffffff", // White background for the table
  },
  gridHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    padding: "10px",
    backgroundColor: "#007bff", // Blue header background
    color: "#ffffff", // White text for the header
    textAlign: "center",
  },
  gridRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#ffffff", // White background for rows
    borderBottom: "1px solid #ccc",
  },
  gridItem: {
    flex: 1,
    textAlign: "center",
    color: "#007bff", // Blue text for content
  },
};

const ActivityPage = () => {
  // Example activity data
  const activities = [
    {
      date: "2024-09-01 14:30",
      event: "Purchased RWA Token",
      amount: "50 RWA",
    },
    {
      date: "2024-09-01 10:15",
      event: "Staked RWA Coin",
      amount: "100 RWA",
    },
    {
      date: "2024-08-31 16:45",
      event: "Unstaked RWA Token",
      amount: "30 RWA",
    },
    {
      date: "2024-08-30 09:00",
      event: "Purchased NFT",
      amount: "1 NFT",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Activity</h2>
      <div style={styles.tableContainer}>
        {/* Header Row */}
        <div style={styles.gridHeader}>
          <div style={styles.gridItem}>Date and Time</div>
          <div style={styles.gridItem}>Event</div>
          <div style={styles.gridItem}>Amount</div>
        </div>

        {/* Activity Rows */}
        {activities.map((activity, index) => (
          <div key={index} style={styles.gridRow}>
            <div style={styles.gridItem}>{activity.date}</div>
            <div style={styles.gridItem}>{activity.event}</div>
            <div style={styles.gridItem}>{activity.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
