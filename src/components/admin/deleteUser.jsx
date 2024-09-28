// src/components/DeleteUserCard.js

import React, { useState } from "react";

const DeleteUserCard = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteUser = async () => {
    if (userId.trim() === "") {
      setMessage("Please enter a valid User ID.");
      return;
    }

    try {
      const response = await fetch(
        `https://rwa-backend.onrender.com/admin/users/${userId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setMessage("User deleted successfully.");
      } else {
        const data = await response.json();
        setMessage(data.message || "Failed to delete user.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  // Styling for the delete user card
  const styles = {
    card: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
    },
    input: {
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: "10px",
      width: "100%",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
    buttonHover: {
      backgroundColor: "#c82333",
    },
    message: {
      marginTop: "10px",
      color: "#dc3545",
    },
  };

  return (
    <div style={styles.card}>
      <h3>Delete User</h3>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        style={styles.input}
      />
      <button onClick={handleDeleteUser} style={styles.button}>
        Delete User
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

export default DeleteUserCard;
