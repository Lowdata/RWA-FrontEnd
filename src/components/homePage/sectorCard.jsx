/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles directly in JSX
const baseStyles = {
  banner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    marginBottom: "30px",
    borderRadius: "15px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
    height: "auto",
    width: "100%",
    maxWidth: "100%", // Prevent overflow
    background: "linear-gradient(135deg, #1f2b36 0%, #3a4a55 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    gap: "20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#ffffff",
  },
  reverseBanner: {
    flexDirection: "row-reverse",
  },
  image: {
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  content: {
    flexGrow: 1,
    textAlign: "left",
    maxWidth: "600px",
    padding: "0 20px",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#ffd700",
    fontFamily: "'Roboto Slab', serif",
  },
  paragraph: {
    fontSize: "15px",
    marginBottom: "20px",
    lineHeight: "1.7",
    color: "#e0e0e0",
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    background: "linear-gradient(135deg, #ffd700 0%, #ff8c00 100%)",
    color: "white",
    padding: "12px 28px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    fontFamily: "'Poppins', sans-serif",
  },
};

const SectorBanner = ({ image, title, description, reverse, route }) => {
  const navigate = useNavigate();
  const bannerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleButtonClick = () => {
    navigate(route); // Use the passed route prop for navigation
  };

  const onMouseEnter = () => {
    if (bannerRef.current) {
      bannerRef.current.style.transform = "translateY(-10px)";
    }
  };

  const onMouseLeave = () => {
    if (bannerRef.current) {
      bannerRef.current.style.transform = "translateY(0)";
    }
  };

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive Styles
  const getResponsiveStyles = () => {
    if (windowWidth <= 768) {
      return {
        flexDirection: "column", // Stack content vertically
        padding: "20px", // Adjust padding
        textAlign: "center", // Center text on smaller screens
        content: {
          maxWidth: "100%", // Ensure text doesn't overflow
          padding: "0 10px",
        },
        paragraph: {
          fontSize: "14px",
          lineHeight: "1.5", // Adjust line height
        },
        button: {
          width: "100%", // Make button fill available space
          padding: "10px", // Adjust button padding
        },
        image: {
          display: "none", // Hide the image on small screens
        },
      };
    } else if (windowWidth >= 1024) {
      return {
        padding: "50px", // More padding on larger screens
        gap: "40px",
        heading: {
          fontSize: "34px",
        },
        paragraph: {
          fontSize: "20px",
        },
        image: {
          width: "160px", // Larger image size
          height: "160px",
        },
      };
    } else {
      // Default styles for medium screens
      return {
        image: {
          width: "140px",
          height: "140px",
        },
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <div
      ref={bannerRef}
      style={{
        ...baseStyles.banner,
        ...(reverse ? baseStyles.reverseBanner : {}),
        ...responsiveStyles,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          ...baseStyles.content,
          ...(responsiveStyles.content || {}),
        }}
      >
        <h3
          style={{
            ...baseStyles.heading,
            ...(responsiveStyles.heading || {}),
          }}
        >
          {title}
        </h3>
        <p
          style={{
            ...baseStyles.paragraph,
            ...(responsiveStyles.paragraph || {}),
          }}
        >
          {description}
        </p>
        <button
          style={{
            ...baseStyles.button,
            ...(responsiveStyles.button || {}),
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={handleButtonClick} // Updated to use dynamic route
        >
          Learn More
        </button>
      </div>
      <img
        src={image}
        alt={title}
        style={{
          ...baseStyles.image,
          ...responsiveStyles.image,
        }}
        loading="lazy"
      />
    </div>
  );
};

export default SectorBanner;
