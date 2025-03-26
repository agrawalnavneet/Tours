import React, { useState, useEffect } from "react";
import "./BookingForm.css"; // Include the CSS file for styling
import Select from "react-select"; // Import react-select

const BookingForm = ({ onClose, tourName }) => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    address: "",
    country: "Australia",
    members: 1,
    countryCode: "+61",  // Default set to +61 (Australia)
    bookingDate: "", // Initialize bookingDate as an empty string
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [progressText, setProgressText] = useState(""); // For progress text

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("User location:", position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const countryCodes = [
    { code: "+213", country: "Algeria" },
    { code: "+61", country: "Australia" }, // Default country code
  ];

  const countries = [
    { label: "Afghanistan", value: "Afghanistan" },
    { label: "Albania", value: "Albania" },
    { label: "Austria", value: "Austria" },
    { label: "Zambia", value: "Zambia" },
    { label: "Zimbabwe", value: "Zimbabwe" },
  ];

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
    setFormData((prevData) => ({ ...prevData, bookingDate: currentDate })); // Set the bookingDate to today's date
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgressText("booking...Plz wait for 30sec");

    try {
      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setIsBookingConfirmed(true);
      } else {
        alert("Error during booking. Please try again.");
      }
    } catch (error) {
      alert("Network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      setProgressText("");
    }
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-form-btn" onClick={onClose}>X</button>
        {!isBookingConfirmed ? (
          <>
            <h3>Confirm Your Booking for <br /><span>{tourName}</span></h3>
            <form onSubmit={handleFormSubmit}>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Your Name" required />
              <label>Telephone:</label>
              <div className="telephone-container">
                <select name="countryCode" value={formData.countryCode} onChange={handleCountryCodeChange} required>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>{country.code} ({country.country})</option>
                  ))}
                </select>
                <input type="tel" name="telephone" value={formData.telephone} onChange={handleInputChange} required placeholder="Enter your phone number" />
              </div>
              <label>Your Country :</label>
              <Select
                name="country"
                value={countries.find((country) => country.value === formData.country)}
                onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption.value })}
                options={countries}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.value}
                required
              />
              <label>Number of Members:</label>
              <input type="number" name="members" value={formData.members} onChange={handleInputChange} min="1" required />
              <label>Your Current Address:</label>
              <input name="address" value={formData.address} onChange={handleInputChange} required placeholder="Enter Your current address" />
              <label>Booking Date:</label>
              <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleInputChange} required />
              <button type="submit" className={`confirm-booking-btn ${isLoading ? "progress-active" : ""}`} disabled={isLoading}>
                {isLoading ? (
                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                    <div className="progress-bar-text">{progressText}</div>
                  </div>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <h3>Your booking was successful!</h3>
            <p>Thank you for booking with us. Our team will contact you within 20 minutes.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;