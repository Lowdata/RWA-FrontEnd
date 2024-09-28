import React from "react";

const TermsAndConditions = () => {
  const styles = {
    container: {
      backgroundColor: "#f0f8ff", // light blue background
      color: "#000080", // navy blue text
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
    },
    header: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    section: {
      marginBottom: "30px",
      padding: "20px",
      backgroundColor: "#ffffff", // white background for sections
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // subtle shadow effect
      borderRadius: "8px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    text: {
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Terms and Conditions</div>

      <div style={styles.section}>
        <h2 style={styles.title}>1. Acceptance of Terms</h2>
        <p style={styles.text}>
          By accessing and using the services of Real World Asset Corp (the
          “Company”), you agree to comply with and be bound by these Terms and
          Conditions. These terms govern your use of the Company’s platform,
          blockchain-based services, and digital assets such as RWATOKEN and
          RWANFT.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>2. Eligibility</h2>
        <p style={styles.text}>
          You must be at least 18 years old or the legal age of majority in your
          jurisdiction to access and use our services. By using our platform,
          you represent that you meet these eligibility requirements.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>3. Account Registration</h2>
        <p style={styles.text}>
          To access certain features of the platform, you may be required to
          register for an account. You are responsible for maintaining the
          confidentiality of your login credentials and for all activities that
          occur under your account. You agree to notify the Company immediately
          of any unauthorized use of your account.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>4. Use of the Platform</h2>
        <p style={styles.text}>
          The Company’s platform allows you to engage in blockchain-based
          investments, token purchases, NFT acquisitions, and other related
          activities. You agree not to use the platform for any unlawful or
          unauthorized purposes, including the violation of any intellectual
          property or privacy rights.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>5. Intellectual Property</h2>
        <p style={styles.text}>
          All content, trademarks, and other intellectual property on the
          platform are the property of Real World Asset Corp or its licensors.
          You may not reproduce, distribute, or otherwise use any of the
          platform’s content without prior written consent from the Company.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>6. Token and NFT Ownership</h2>
        <p style={styles.text}>
          Ownership of RWATOKEN, RWANFT, or any other digital asset on the
          platform is tied to the blockchain, and transactions are recorded on
          the Binance Smart Chain. Your ownership rights are governed by the
          smart contract and blockchain infrastructure, and the Company does not
          hold or control your digital assets.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>7. Risks</h2>
        <p style={styles.text}>
          By participating in blockchain-based investments and acquiring digital
          assets, you acknowledge that these activities involve certain risks,
          including market volatility, regulatory uncertainty, and the potential
          loss of your investment. You accept these risks and agree that the
          Company is not liable for any losses you may incur.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>8. Termination of Services</h2>
        <p style={styles.text}>
          The Company reserves the right to suspend or terminate your account or
          access to the platform at any time if you violate these Terms and
          Conditions or engage in any fraudulent or unlawful activities.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>9. Limitation of Liability</h2>
        <p style={styles.text}>
          The Company is not liable for any direct, indirect, incidental, or
          consequential damages arising from your use of the platform or the
          performance of digital assets. The platform is provided on an "as is"
          and "as available" basis without any warranties of any kind.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>10. Governing Law</h2>
        <p style={styles.text}>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of [Your Jurisdiction]. You agree to submit to the
          exclusive jurisdiction of the courts located within [Your
          Jurisdiction] to resolve any legal matters arising from these terms.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>11. Changes to the Terms</h2>
        <p style={styles.text}>
          The Company reserves the right to modify these Terms and Conditions at
          any time. Any changes will be effective immediately upon posting on
          the platform. Continued use of the platform after such modifications
          constitutes your acceptance of the updated terms.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>12. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions about these Terms and Conditions, please
          contact us at <strong>support@realworldassetcorp.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
