import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [scrollY, setScrollY] = useState(0);

  // Function to update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic background color based on scroll position
  const getBackgroundColor = (index) => {
    const baseColor = 32; 
    const lightenFactor = Math.min((scrollY - index * 200) / 300, 0); 

    // Calculate the new background color
    const newColor = baseColor + lightenFactor * 60; // Lightens up the background progressively
    return `rgb(${newColor}, ${newColor + 30}, ${newColor + 70})`;
  };

  const styles = {
    container: {
      backgroundColor: "#203C5E",
      color: "#FFFFFF",
      padding: "4rem 2rem",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.8",
      textAlign: "center",
    },
    header: {
      fontSize: "2.8rem",
      fontWeight: "600",
      marginBottom: "2.5rem",
      color: "#F0C419",
    },
    section: (index) => ({
      marginBottom: "3rem",
      padding: "2.5rem",
      backgroundColor: getBackgroundColor(index), // Dynamic background color
      transition: "background-color 0.3s ease", // Smooth transition between colors
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
      borderRadius: "12px",
      maxWidth: "800px",
      margin: "10px auto",
    }),
    title: {
      fontSize: "2.2rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "#F0C419",
    },
    text: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      color: "#FFFFFF",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Privacy Policy</div>

      {/* Each section gets a unique index for scroll-based background adjustment */}
      <div style={styles.section(0)}>
        <h2 style={styles.title}>Introduction</h2>
        <p style={styles.text}>
          Welcome to <strong>Real World Asset Corp</strong>. We are committed to
          safeguarding your privacy and ensuring that your personal data is
          protected. This Privacy Policy explains how we collect, use, and share
          your information when you use our platform.
        </p>
      </div>

      <div style={styles.section(1)}>
        <h2 style={styles.title}>Information We Collect</h2>
        <p style={styles.text}>
          We collect the following types of information:
          <br />- <strong>Personal Information:</strong> Name, contact details,
          payment information, and identification documents.
          <br />- <strong>Usage Data:</strong> Information about your
          interactions with our platform, such as IP address, browser type, and
          device identifiers.
          <br />- <strong>Transaction Data:</strong> Details related to your
          investments, purchases, and transaction history.
        </p>
      </div>

      <div style={styles.section(2)}>
        <h2 style={styles.title}>How We Use Your Information</h2>
        <p style={styles.text}>
          Your information is used for the following purposes:
          <br />
          - To process transactions, manage your account, and provide customer
          support.
          <br />
          - To verify your identity and comply with legal regulations (AML/KYC).
          <br />
          - To send you updates and promotional offers related to our services.
          <br />- To improve our platform and develop new features based on
          usage data.
        </p>
      </div>

      <div style={styles.section(3)}>
        <h2 style={styles.title}>Data Sharing and Disclosure</h2>
        <p style={styles.text}>
          We may share your data with:
          <br />- <strong>Third-Party Providers:</strong> Such as payment
          processors and cloud storage providers for secure transactions and
          storage.
          <br />- <strong>Legal Obligations:</strong> To comply with legal
          processes or government requests.
          <br />- <strong>Business Transfers:</strong> In case of mergers,
          acquisitions, or asset sales, your data may be transferred.
        </p>
      </div>

      <div style={styles.section(4)}>
        <h2 style={styles.title}>Security</h2>
        <p style={styles.text}>
          We employ advanced security measures, including encryption and
          multi-factor authentication, to protect your data from unauthorized
          access, breaches, and other threats.
        </p>
      </div>

      <div style={styles.section(5)}>
        <h2 style={styles.title}>Data Retention</h2>
        <p style={styles.text}>
          We retain your data for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy or as required by law.
        </p>
      </div>

      <div style={styles.section(6)}>
        <h2 style={styles.title}>Your Rights</h2>
        <p style={styles.text}>
          You have the following rights regarding your personal data:
          <br />- <strong>Access:</strong> You may request a copy of the
          personal data we hold about you.
          <br />- <strong>Correction:</strong> You may request corrections to
          any inaccurate information.
          <br />- <strong>Deletion:</strong> You may request that your personal
          data be deleted under certain circumstances.
          <br />- <strong>Objection:</strong> You may object to certain types of
          data processing, such as marketing communications.
        </p>
      </div>

      <div style={styles.section(7)}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.text}>
          If you have any questions or concerns about this Privacy Policy or
          your personal data, please contact us at:{" "}
          <strong>privacy@realworldassetcorp.com</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
