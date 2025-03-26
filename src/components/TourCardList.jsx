import React from "react";
import TourCard from "./TourCard.jsx";

import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";

const TourCardList = () => {
  const dummyTours = [
    {
      id: 1,
      name: "Great Ocean Road",
      description: "One of the most iconic drives in the world, offering stunning coastal views, beaches, and natural attractions like the Twelve Apostles and Loch Ard Gorge.",
      up_to_person: "Up to 4 persons", 
      image: img_1,
      location: "Great Ocean Road, Australia",
      price: 299,
      startPoint: "Melbourne Airport, Australia",
      endPoint: "Great Ocean Road, Australia",
      rating: 4,
    },
    {
      id: 2,
      name: "Grampians National Park",
      description: "A paradise for nature lovers and hikers, with dramatic mountain ranges, stunning waterfalls, and abundant wildlife.",
      up_to_person: "Up to 4 persons", 
      image: img_2,
      location: "Grampians National Park, Australia",
      price: 499,
      startPoint: "Melbourne Airport, Australia",
      endPoint: "Grampians National Park, Australia",
      rating: 5,
    },
    {
      id: 3,
      name: "Phillip Island",
      description: "Famous for its Penguin Parade and wildlife, offering scenic beaches and beautiful coastal walks.",
      up_to_person: "Up to 4 persons", 
      image: img_3,
      location: "Phillip Island, Australia",
      price: 399,
      startPoint: "Melbourne Airport, Australia",
      endPoint: "Phillip Island, Australia",
      rating: 3,
    },
    {
      id: 4,
      name: "Yarra Valley",
      description: "Renowned for its vineyards and wineries, this picturesque region is perfect for wine lovers and food enthusiasts.",
      up_to_person: "Up to 4 persons", 
      image: img_4,
      location: "Yarra Valley, Australia",
      price: 199,
      startPoint: "Melbourne Airport, Australia",
      endPoint: "Yarra Valley, Australia",
      rating: 5,
    }
  ];

  const renderStars = (rating) => (
    <span style={{ color: "orange" }}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "10px",
      }}
    >
      {dummyTours.map((tour) => (
        <TourCard
          key={tour.id}
          name={tour.name}
          description={
            <>
              {tour.description} <br />
              <strong>Rating:</strong> {renderStars(tour.rating)}
            </>
          }
          up_to_person={tour.up_to_person}
          image={tour.image}
          location={tour.location}
          price={tour.price}
          startPoint={tour.startPoint}
          endPoint={tour.endPoint}
        />
      ))}
    </div>
  );
};

export default TourCardList;
