import React, { useState } from "react";
import LoadingSpinner from "../loading/Loading";

const ProductPipeline = () => {
  const [productListings, setProductListings] = useState({
    approved: [],
    pending: [],
    rejected: [], // New state for rejected products
  });
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  const fetchProductListings = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/admin/products",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      const products = data.products;

      if (Array.isArray(products)) {
        const approvedProducts = products.filter(
          (product) => product.status === "Approved"
        );
        const pendingProducts = products.filter(
          (product) => product.status === "Pending"
        );
        const rejectedProducts = products.filter(
          (product) => product.status === "Rejected"
        );

        setProductListings({
          approved: approvedProducts,
          pending: pendingProducts,
          rejected: rejectedProducts, // Set rejected products
        });
      } else {
        console.error("Unexpected response format: products is not an array.");
      }
    } catch (error) {
      console.error("Error fetching product listings:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProductStatus = async (productId, status) => {
    try {
      const response = await fetch(
        "https://rwa-backend.onrender.com/admin/approveProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ productId, status }),
        }
      );

      if (response.ok) {
        fetchProductListings(); // Refresh the listings after status update
      } else {
        console.error("Failed to update product status.");
      }
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };

  const handleFetchClick = () => {
    setShowData(!showData);
    if (!showData) {
      fetchProductListings();
    }
  };

  const handleRefreshClick = () => {
    fetchProductListings();
  };

  // Styling object
  const styles = {
    container: {
      width: "90%",
      margin: "0 auto",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      margin: "10px",
      padding: "12px 25px",
      fontSize: "18px",
      cursor: "pointer",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
    },
    productCategory: {
      display: "inline-block",
      width: "45%",
      verticalAlign: "top",
      overflowY: "auto",
      height: "400px",
      border: "2px solid #007BFF",
      borderRadius: "10px",
      padding: "15px",
      margin: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    },
    productItem: {
      marginBottom: "20px",
      textAlign: "left",
      padding: "10px",
      borderRadius: "5px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    header: {
      fontSize: "22px",
      marginBottom: "15px",
      color: "#007BFF",
    },
    productName: {
      fontWeight: "bold",
      fontSize: "18px",
      color: "#333",
    },
    productDetail: {
      fontSize: "16px",
      color: "#555",
    },
    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "10px",
    },
    actionButton: {
      padding: "8px 12px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "none",
    },
    approveButton: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    rejectButton: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h2>Product Pipeline</h2>

      <button onClick={handleFetchClick} style={styles.button}>
        {showData ? "Hide Product Pipeline" : "Show Product Pipeline"}
      </button>
      {showData && (
        <button onClick={handleRefreshClick} style={styles.button}>
          Refresh Data
        </button>
      )}

      {loading && <LoadingSpinner/>}

      {showData && !loading && (
        <div>
          {/* Approved Products */}
          <div style={styles.productCategory}>
            <h3 style={styles.header}>Approved Products</h3>
            {productListings.approved.length === 0 ? (
              <p>No approved products.</p>
            ) : (
              productListings.approved.map((product) => (
                <div key={product.id} style={styles.productItem}>
                  <h4 style={styles.productName}>
                    Product Name: {product.productName}
                  </h4>
                  <p style={styles.productDetail}>
                    Category: {product.category}
                  </p>
                  <p style={styles.productDetail}>
                    Amount: ${product.saleAmount}
                  </p>
                  <p style={styles.productDetail}>
                    Description: {product.description}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Pending Products */}
          <div style={styles.productCategory}>
            <h3 style={styles.header}>Pending Products</h3>
            {productListings.pending.length === 0 ? (
              <p>No pending products.</p>
            ) : (
              productListings.pending.map((product) => (
                <div key={product.id} style={styles.productItem}>
                  <h4 style={styles.productName}>
                    Product Name: {product.productName}
                  </h4>
                  <p style={styles.productDetail}>
                    Category: {product.category}
                  </p>
                  <p style={styles.productDetail}>
                    Amount: ${product.saleAmount}
                  </p>
                  <p style={styles.productDetail}>
                    Description: {product.description}
                  </p>
                  <div style={styles.actionButtons}>
                    <button
                      style={{
                        ...styles.actionButton,
                        ...styles.approveButton,
                      }}
                      onClick={() =>
                        updateProductStatus(product.id, "Approved")
                      }
                    >
                      Approve
                    </button>
                    <button
                      style={{ ...styles.actionButton, ...styles.rejectButton }}
                      onClick={() =>
                        updateProductStatus(product.id, "Rejected")
                      }
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Rejected Products */}
          <div style={styles.productCategory}>
            <h3 style={styles.header}>Rejected Products</h3>
            {productListings.rejected.length === 0 ? (
              <p>No rejected products.</p>
            ) : (
              productListings.rejected.map((product) => (
                <div key={product.id} style={styles.productItem}>
                  <h4 style={styles.productName}>
                    Product Name: {product.productName}
                  </h4>
                  <p style={styles.productDetail}>
                    Category: {product.category}
                  </p>
                  <p style={styles.productDetail}>
                    Amount: ${product.saleAmount}
                  </p>
                  <p style={styles.productDetail}>
                    Description: {product.description}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPipeline;
