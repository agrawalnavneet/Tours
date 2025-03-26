import React, { useState, useEffect } from "react";
import "./HeadingSection.css";
// import lens2 from "../assets/lens2.png"; // Replace with the actual path to your image
import lens1 from "../assets/lens1.png";
const HeadingSection = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a 2-second loading period
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div
      className="entire-heading heading-section"
      style={{
        backgroundImage: `url(${lens1})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "white",
        padding: "20px 0",
      }}
    >
      {loading ? (
        <div className="skeleton-loader">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-paragraph"></div>
        </div>
      ) : (
        <>
          <h2 className="heading-title">Book Your Tour  </h2>
          <p className="heading-paragraph">
            Explore our featured tour packages and book your next adventure.
          </p>
          
        
        </>
      )}
    </div>
  );
};

export default HeadingSection;
