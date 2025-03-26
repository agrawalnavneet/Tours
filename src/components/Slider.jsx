// YE CSS VERSION ONE KA HAIN 
// PRODUCTION CSS OR EJS OR PYTHON KA FAST API SE AAYEGA
import React, { useEffect, useState, useRef } from "react";
import "./Slider.css";
// Import images
// import slider5 from "../assets/slider5.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";

const Slider = () => {
  const images = [slider5, slider2, slider3, slider4, slider5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);
  const sliderRef = useRef(null);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle next and previous slide
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Handle mouse and touch start
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  // Handle mouse and touch move
  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    setMoveX(clientX - startX);
    sliderRef.current.style.transition = "none"; // Disable transition while dragging
    sliderRef.current.style.transform = `translateX(${-(currentIndex * 100) + (moveX / window.innerWidth) * 100}%)`;
  };

  // Handle mouse and touch end
  const handleEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      sliderRef.current.style.transition = "transform 0.3s ease-out"; // Enable smooth transition
      if (Math.abs(moveX) > window.innerWidth / 4) {
        // If the user dragged more than 25% of the image width, change the slide
        if (moveX < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      } else {
        // Otherwise, reset to the current slide
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseUp={handleEnd}
      onTouchEnd={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        className="carousel-images"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Add navigation controls */}
      <div className="carousel-controls">
        <button onClick={handlePrev}>❮</button>
        <button id="second" onClick={handleNext}>❯</button>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
