import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";
import lens1 from "../assets/lens1.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* About Us Section with an id */}
      <div className="footer-section about-us" id="about-us">
        <h2>About Us</h2>
        <p className="large-text">
          Aviatours, Australia, is your dedicated travel partner, ensuring your
          journey through Australia is seamless and unforgettable. From the
          rugged Outback to pristine coastlines, we offer a wide range of tour
          packages, reliable hotel bookings, and personalized itineraries that
          cater to every type of traveler. Whether you're seeking adventure,
          relaxation, or family-friendly holidays, we craft the perfect travel
          experiences for you. Discover iconic destinations like the Great
          Barrier Reef, Sydney's vibrant culture, or the serene landscapes of
          Tasmania. Our tour packages span from thrilling wildlife safaris and
          scenic hikes to luxurious beach escapes. With flexible itineraries, we
          tailor each trip to meet your interests, ensuring a truly memorable
          experience. Aviatours specializes in offering guided tours, so you can
          explore Australia's most renowned landmarks, including the Great
          Barrier Reef. Snorkel, dive, or take a boat tour to view the stunning
          marine life and coral reefs, or enjoy an underwater observatory
          experience. If you prefer city life, Sydney and Melbourne offer
          world-class dining, shopping, and cultural experiences, from the
          iconic Sydney Opera House to Melbourne’s vibrant laneways. For those
          seeking peace and solitude, Tasmania provides the perfect escape with
          its lush forests, rugged mountains, and beautiful beaches. Our tours
          offer opportunities to explore Tasmania’s natural beauty, visit
          wineries, and encounter local wildlife. At Aviatours, we pride
          ourselves on delivering exceptional customer service. Our 24/7 support
          is available to assist with any changes or requests, ensuring your
          trip is stress-free from start to finish. We also work with trusted
          hotels to ensure your accommodation is comfortable and convenient.
          What sets us apart is our passion for Australia and dedication to
          providing authentic travel experiences. We don’t just sell vacations;
          we bring your dream Australian adventure to life. With attention to
          detail, expert knowledge, and a commitment to excellence, we ensure
          you experience the best of Australia, tailored to your needs. Let
          Aviatours, Australia, be your guide to a truly unforgettable vacation!
        </p>
      </div>

      {/* What We Provide Section */}
      <div className="footer-section provide">
        <h2>What We Provide</h2>
        <ul>
          <li>Customized Tour Packages</li>
          <li>Hotel Bookings</li>
          <li>Car Rentals</li>
          <li>Group & Solo Travel Support</li>
          <li>24/7 Customer Assistance</li>
        </ul>
      </div>

      {/* Contact Us Section with an id */}
      <div className="footer-section contact-us" id="contact-us">
        <h2>Contact Us</h2>
        <p>123 Sydney Road, Melbourne, Australia</p>
        <p>Phone: +61 439 551 994</p>
        <p>Email: aviatours@gmail.com</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/61439551994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aviatours Australia. All rights
          reserved.
        </p>
        <p>
          Developed By:{" "}
          <a
            href="https://freelancerpro.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FreelancerPro (INDIA)
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
