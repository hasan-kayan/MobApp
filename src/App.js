import React from "react";
import "./App.css";

const App = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "pink",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden"
      }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "5px",
              height: "5px",
              backgroundColor: "white",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random()
            }}
          ></div>
        ))}
      </div>
      <video style={{ display: "block" }} width="900" height="500" autoPlay loop controls>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2 style={{
        marginTop: "20px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "red",
        animation: "fadeIn 2s infinite alternate"
      }}>
        🎉🥳 SENİ HERŞEYDEN ÇOOKK SEVİYORUMMMM 🎊🎈
      </h2>
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
