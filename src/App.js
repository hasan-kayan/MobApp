import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [dots, setDots] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const generateDots = () => {
      return Array.from({ length: 50 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }));
    };
    setDots(generateDots());

    // Ensure video starts playing
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "pink",
      position: "relative",
      padding: "20px"
    }}>
      {/* Floating Dots */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }}>
        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "5px",
              height: "5px",
              backgroundColor: "white",
              borderRadius: "50%",
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity
            }}
          ></div>
        ))}
      </div>

      {/* Video - Autoplay, Muted, Inline for Mobile */}
      <video
        ref={videoRef}
        style={{ 
          display: "block", 
          maxWidth: "90%", 
          height: "auto", 
          borderRadius: "10px" 
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Message */}
      <h2 style={{
        marginTop: "20px",
        fontSize: "clamp(16px, 5vw, 24px)", // Responsive font size
        fontWeight: "bold",
        color: "red",
        textAlign: "center",
        animation: "fadeIn 2s infinite alternate"
      }}>
        🎉🥳 SENİ HER ŞEYDEN ÇOOKK SEVİYORUMMMM 🎊🎈
      </h2>

      {/* Animation */}
      <style>
        {`@keyframes fadeIn {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }`}
      </style>
    </div>
  );
};

export default App;
