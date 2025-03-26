import React from "react";
import "./MyCompanyLocation.css";
import lens1 from "../assets/lens1.png";
const MyCompanyLocation = () => {
  // Set the latitude and longitude for Sydney, Australia
  const latitude = -33.8688; // Latitude for Sydney
  const longitude = 151.2093; // Longitude for Sydney

  // Construct the Google Maps iframe URL using the latitude and longitude with a marker
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed&markers=${latitude},${longitude}`;

  return (
    <div className="company-location"  style={{
      backgroundImage: `url(${lens1})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      color: "white",
      padding: "0px 0",
    }}>
      <h2>My Company Location</h2>
      <p>Sydney, Australia</p>

      {/* Embed the Google Map using an iframe with the longitude and latitude */}
      <div className="map-container-company" >
        <iframe
          title="Company Location"
          src={mapUrl}
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MyCompanyLocation;
