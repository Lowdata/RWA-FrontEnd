import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const NumberCounter = ({ title, endValue, totalSupply }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 2 seconds for the animation
    const incrementTime = Math.abs(Math.floor(duration / endValue));

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "40px",
        position: "relative",
      }}
    >
      {/* Glitter effect overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "150%",
          height: "100%",
          backgroundImage:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
          transform: "translateX(-50%)",
          animation: "glitter 2s linear infinite",
          opacity: 0.6,
        }}
      />

      <h3
        style={{
          fontSize: "24px",
          color: "#F5B63D", // Golden title color
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      {/* Large number with plus sign */}
      <div
        style={{
          fontSize: "64px",
          fontWeight: "bold",
          color: "#F0E68C", // Light shade of gold
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px" }}>{count.toLocaleString()}</span>
        <span style={{ fontSize: "48px", color: "#FFD700" }}>+</span>{" "}
        {/* Big plus sign */}
      </div>

      {/* Total supply below the counter */}
      <p
        style={{
          fontSize: "18px",
          color: "#FFDF00",
          fontStyle: "italic",
          marginTop: "5px",
        }}
      >
        Out of {totalSupply} Total Supply
      </p>
    </div>
  );
};

export default NumberCounter;
