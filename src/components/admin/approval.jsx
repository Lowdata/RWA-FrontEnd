/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { approveOrRejectBusinessPartner } from "../../store/api/admin";

const ApproveBusinessPartner = ({ user }) => {
  const dispatch = useDispatch();

  const handleApproval = (status) => {
    dispatch(approveOrRejectBusinessPartner({ rwa_id: user.rwa_id, status }));
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #e0e0e0",
      borderRadius: "16px",
      padding: "24px",
      maxWidth: "400px",
      width: "100%",
      margin: "20px auto",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      transition: "box-shadow 0.3s ease, transform 0.3s ease",
    },
    containerHover: {
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      transform: "translateY(-4px)",
    },
    heading: {
      fontSize: "1.75rem",
      color: "#333",
      marginBottom: "12px",
      textAlign: "center",
      fontWeight: "600",
    },
    infoText: {
      fontSize: "1rem",
      color: "#666",
      margin: "8px 0",
      textAlign: "center",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      marginTop: "24px",
    },
    button: {
      padding: "12px 24px",
      margin: "0 12px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
      width: "40%",
      textAlign: "center",
    },
    approveButton: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    rejectButton: {
      backgroundColor: "#f44336",
      color: "white",
    },
    buttonHover: {
      transform: "scale(1.05)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div
      style={styles.container}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, styles.containerHover)
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, styles.container)
      }
    >
      <h3 style={styles.heading}>{user.companyName || "Business Partner"}</h3>
      <p style={styles.infoText}>RWA ID: {user.rwa_id}</p>
      <p style={styles.infoText}>Email: {user.email}</p>
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.approveButton }}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, {
              ...styles.button,
              ...styles.approveButton,
              ...styles.buttonHover,
            })
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, {
              ...styles.button,
              ...styles.approveButton,
            })
          }
          onClick={() => handleApproval("Approved")}
        >
          Approve
        </button>
        <button
          style={{ ...styles.button, ...styles.rejectButton }}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, {
              ...styles.button,
              ...styles.rejectButton,
              ...styles.buttonHover,
            })
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, {
              ...styles.button,
              ...styles.rejectButton,
            })
          }
          onClick={() => handleApproval("Rejected")}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApproveBusinessPartner;
