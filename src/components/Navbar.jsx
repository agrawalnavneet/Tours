// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false); // Set default to light mode (false)

//   // Apply dark mode to body on initial load
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   // Toggle menu visibility on hamburger click
//   const handleHamburgerClick = () => {
//     setMenuActive(!menuActive);
//   };

//   // Close the menu when close button is clicked
//   const handleCloseMenu = () => {
//     setMenuActive(false);
//   };

//   // Toggle dark mode
//   const handleDarkModeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };
  

//   return (
//     <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
//       <div className="logo"><span>A</span>viatours</div>

//       {/* Dark Mode Button with Sun/Moon Emojis */}
//       <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
//         {isDarkMode ? "🌙" : "🌞"} {/* Switch between sun and moon emojis */}
//       </button>

//       {/* Hamburger Icon */}
//       <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleHamburgerClick}>
//         <div className="line line1"></div>
//         <div className="line line2"></div>
//         <div className="line line3"></div>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
//         <button className="close-btn" onClick={handleCloseMenu}>x</button>
//         <li><a href="/">Home</a></li>
//         <li><a href="/tour">Tour</a></li>
//         <li><a href="#">About Us</a></li>
//         <li><a href="#">Contact Us</a></li>
//         <li><a href="/admin">Admin Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Apply dark mode to body on initial load
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   // Toggle the menu when hamburger icon is clicked
//   const handleHamburgerClick = () => {
//     setMenuActive(!menuActive);
//   };

//   // Close the menu when close button is clicked
//   const handleCloseMenu = () => {
//     setMenuActive(false);
//   };

//   // Toggle dark mode
//   const handleDarkModeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Close menu after a link click
//   const handleLinkClick = () => {
//     setMenuActive(false); // Hide the menu after a link is clicked
//   };

//   return (
//     <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
//       <div className="logo"><span>A</span>viatours</div>

//       {/* Dark Mode Button */}
//       <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
//         {isDarkMode ? "🌙" : "🌞"}
//       </button>

//       {/* Hamburger Icon */}
//       <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleHamburgerClick}>
//         <div className="line line1"></div>
//         <div className="line line2"></div>
//         <div className="line line3"></div>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
//         <button className="close-btn" onClick={handleCloseMenu}>x</button>
//         <li>
//           {/* Link to scroll to top */}
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick} // Close menu after clicking the link
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="tour"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             Tour
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="about-us"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="contact-us"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             Contact Us
//           </Link>
//         </li>
//         <li><a href="/admin">Admin Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Apply dark mode to body on initial load
//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   // Toggle the menu when hamburger icon is clicked
//   const handleHamburgerClick = () => {
//     setMenuActive(!menuActive);
//   };

//   // Close the menu when close button is clicked
//   const handleCloseMenu = () => {
//     setMenuActive(false);
//   };

//   // Toggle dark mode
//   const handleDarkModeToggle = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   // Close menu after a link click
//   const handleLinkClick = () => {
//     setMenuActive(false); // Hide the menu after a link is clicked
//   };

//   return (
//     <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
//       <div className="logo"><span>A</span>viatours</div>

//       {/* Dark Mode Button */}
//       <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
//         {isDarkMode ? "🌙" : "🌞"}
//       </button>

//       {/* Hamburger Icon */}
//       <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleHamburgerClick}>
//         <div className="line line1"></div>
//         <div className="line line2"></div>
//         <div className="line line3"></div>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${menuActive ? "active" : ""}`}>
//         <button className="close-btn" onClick={handleCloseMenu}>x</button>
//         <li>
//           {/* Link to scroll to top */}
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick} // Close menu after clicking the link
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="tour"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             Tour
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="about-us"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             About Us
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="contact-us"
//             smooth={true}
//             duration={500}
//             onClick={handleLinkClick}
//           >
//             Contact Us
//           </Link>
//         </li>
//         <li><a href="/admin">Admin Login</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css";
import aviatourslogo from "../assets/aviatourslogo.png"; // Import logo image
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode to body on initial load
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Toggle the menu when hamburger icon is clicked
  const handleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  // Close the menu when close button is clicked
  const handleCloseMenu = () => {
    setMenuActive(false);
  };

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Close menu after a link click
  const handleLinkClick = () => {
    setMenuActive(false); // Close the menu after a link is clicked
    scrollToTop();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: -20,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <img src={aviatourslogo} alt="Aviatours Logo" />

      {/* Dark Mode Button */}
      <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
        {isDarkMode ? "🌙" : "🌞"}
      </button>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleHamburgerClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <button className="close-btn" onClick={handleCloseMenu}>x</button>
        <li>
          {/* Link to scroll to the top */}
          <Link
            //to="home" // Home section id will be used for scroll
            smooth={true}
            duration={500}
            onClick={handleLinkClick} // Close the menu after clicking
            
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="tour"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            Tour
          </Link>
        </li>
        <li>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </li>
        <li><a href="#"></a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
