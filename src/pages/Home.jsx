// import React from "react";
// import Navbar from "../components/Navbar.jsx";
// import Slider from "../components/Slider.jsx";
// import Heading from "../components/Heading.jsx";
// import TourCardList from "../components/TourCardList.jsx";
// // import Divider from "../components/Divider.jsx";
// import MyCompanyLocation from "../components/MyCompanyLocation.jsx";
// import Stats from "../components/Stats.jsx"; // Import the updated Stats component
// import Footer from "../components/Footer.jsx"; // Import the updated Footer component
// import WhatsAppButton from "../components/WhatsAppButton"; // Import the button component
// import YouTubeEmbed from "../components/YouTubeEmbed";
// import UpArrow from "../components/UpArrow";
// import GallerySlider from "../components/GallerySlider.jsx"; // Import the GallerySlider component
// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <WhatsAppButton />    
//       <Slider /> {/* Slider includes Search Bar and Get Started Button */}
//       <div>
//         <Heading />
//       </div>
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
//           backgroundSize: "cover",
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center",
//           color: "white",
//           padding: "50px 0",
//         }}
//       >
//         <TourCardList />
//       </div>
//       <div className="gallery-slider-container">
//         <GallerySlider /> {/* The GallerySlider component with the images */}
//       </div>
//       {/* Divider */}
//       {/* Location Section */}
//       <div>
//         <MyCompanyLocation
//           locationName="My Company"
//           locationAddress="123 Business St, City, Country"
//           lat="37.7749" // Example Latitude
//           long="-122.4194" // Example Longitude (San Francisco)
//         />
//       </div>
//       {/* Divider */}
//       <div>
//         {/* <h1 >My YouTube Video</h1> */}
//         <YouTubeEmbed videoId="v6-51yRkVbk" />
//       </div>
//       {/* Stats Section */}
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
//           backgroundSize: "cover",
//           backgroundAttachment: "fixed",
//           backgroundPosition: "center",
//           color: "white",
//           padding: "50px 0",
//         }}
//       >
//         <Stats />
//       </div>
      
//       <Footer />
//       <UpArrow />
//     </>
//   );
// };
// export default Home;
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import TourCardList from "../components/TourCardList.jsx";
import MyCompanyLocation from "../components/MyCompanyLocation.jsx";
import Stats from "../components/Stats.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton";
import YouTubeEmbed from "../components/YouTubeEmbed";
import UpArrow from "../components/UpArrow";
import GallerySlider from "../components/GallerySlider";
import lens1 from '../assets/lens1.png'; 
// import lens2 from '../assets/lens2.png';
import HeadingSection from "../components/HeadingSection.jsx";
import backgroundimg from "../assets/backgroundimg.jpeg"; 
import GallerySliderUP from "../components/GallerySliderUp.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Slider />
      
      <HeadingSection />  
      <GallerySliderUP />
      <div
        style={{
          backgroundImage: `url(${lens1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          // backgroundAttachment: "inherit",
          backgroundPosition: "center",
          color: "white",
          padding: "0px 0",
          // boxShadow: "0px -10px 10px rgba(255, 255, 255, 0.5), 0px 10px 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        <TourCardList />
      </div>

      <div className="gallery-slider-container">
        <GallerySlider />
      </div>



      
      <div>
        <MyCompanyLocation
          locationName="My Company"
          locationAddress="123 Business St, City, Country"
          lat="37.7749"
          long="-122.4194"
        />
      </div>

      <div>
        <YouTubeEmbed videoId="v6-51yRkVbk" />
      </div>

      <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 09), rgba(0, 0, 0, 0.6)), url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "white",
        padding: "50px 0",
      }}
    >
      <Stats />
    </div>

      <Footer />
      <UpArrow />
    </>
  );
};

export default Home;
