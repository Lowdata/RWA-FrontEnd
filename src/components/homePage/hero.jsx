import React from "react";
import { logo, bg } from "../../assets/images"; // Import the logo and background images

const Hero = () => (
  <div id="one" style={styles.landingScreen}>
    <div id="2" style={styles.cardBackground}>
      <div
        id="3"
        style={{ ...styles.imageOverlay, backgroundImage: `url(${bg})` }}
      ></div>
      <div id="5" style={styles.heroContent}>
        <h1 id="4" style={styles.heroHeading}>
          Revolutionizing Global Investments through{" "}
          <span style={styles.emphasizedText}>Blockchain Technology</span>
        </h1>
        <img src={logo} alt="RWAC logo" style={styles.logoImage} />
      </div>
    </div>
  </div>
);

const styles = {
  landingScreen: {
    position: "relative",
    height: "80vh", // Full viewport height
    width: "100%", // Full viewport width
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFFFF",
    margin: "0", // Ensure no margin that causes gap
  },
  cardBackground: {
    background: "linear-gradient(360deg, #161616 0%, #00256F 100%)",
    position: "relative",
    width: "100%", // Full width for background
    height: "80vh", // Set height relative to the viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageOverlay: {
    position: "absolute",
    height: "100%", // Cover the full background
    width: "100%", // Cover the full width of the card background
    top: "0",
    left: "0",
    backgroundSize: "cover", // Ensure the image covers the whole area
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.2,
    zIndex: 1,
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    textAlign: "center",
    padding: "20px",
    width: "100%", // Make content width responsive
    maxWidth: "1200px", // Limit the max width for larger screens
  },
  heroHeading: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "400",
    fontSize: "3vw",
    lineHeight: "1.2",
    color: "#FFFFFF",
    marginBottom: "20px",
    maxWidth: "100%",
  },
  emphasizedText: {
    color: "#00FFFF",
    fontWeight: "bold",
  },
  logoImage: {
    marginTop: "20px",
    width: "45vw",
    maxWidth: "350px",
    height: "auto",
  },
};

export default Hero;
