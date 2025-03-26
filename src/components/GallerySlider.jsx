// src/components/GallerySlider.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lens1 from '../assets/lens1.png';
import img_1 from '../assets/img_1.jpg';
import img_2 from '../assets/img_2.png';
import img_3 from '../assets/img_3.png';
// import img_4 from '../assets/img_4.png';

// Import CSS file
import './GallerySlider.css';

const galleryImages = [
  img_1,
  img_2,
  img_3,
  img_2,
];

const GallerySlider = () => {
  // State to hold the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Set image height based on screen width
  const imageHeight = windowWidth <= 768 ? '200px' : '250px';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
        },
      },
      {
        breakpoint: 768, // For small screens (phones)
        settings: {
          slidesToShow: 1, // Show 1 slide for small screens
        },
      },
    ],
  };

  return (
    <div className="gallery-slider-container" style={{
      backgroundImage: `url(${lens1})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      color: "white",
      padding: "20px 0",
    }}>
      <h2 className="gallery-slider-title">Our Popular Tours</h2>
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <img
              src={image}
              alt={`gallery ${index}`}
              style={{
                width: '100%',
                height: imageHeight,  // Dynamic height based on screen size
                objectFit: 'cover',   // Ensure images maintain their aspect ratio
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
