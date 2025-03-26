// src/components/Skeleton.jsx
import React from "react";

const Skeleton = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <div style={{ width: "200px", height: "2.5rem", backgroundColor: "#e0e0e0", margin: "10px auto", borderRadius: "4px" }}></div>
      <div style={{ width: "300px", height: "1.2rem", backgroundColor: "#e0e0e0", margin: "10px auto", borderRadius: "4px" }}></div>
    </div>
  );
};

export default Skeleton;
