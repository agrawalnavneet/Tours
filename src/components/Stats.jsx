import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "./Stats.css"; // Updated CSS without 3D effects

const Stats = () => {
  const statsData = [
    { label: "Website Visitors", count: 2054, color: "orange" },
    { label: "This Month's Visitors", count: 179, color: "purple" },
    { label: "Bookings This Month", count: 56, color: "green" },
  ];

  const [scroll, setScroll] = useState(false);
  const statsRef = useRef(null);

  const handleScroll = () => {
    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setScroll(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="stats-section">
      {/* Observation Section */}
      <section className="observation-section">
        <h2 className="section-heading">Our Observation</h2>
        <p className="section-paragraph">
          Through careful tracking and analysis of our website and bookings, we've
          gained valuable insights into user behavior and trends. These statistics
          reflect our growing audience engagement and the positive impact of our 
          services. Our focus continues to be on improving user experience and
          increasing conversions. Here are some key statistics we've been monitoring.
        </p>
      </section>

      {/* Stats Container */}
      <div ref={statsRef} className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className={`stats-circle ${stat.color}`}>
            <div className="stats-content">
              <h2 className="stats-number">
                {scroll && (
                  <>
                    <CountUp
                      start={stat.count * 0.9} // Start from 90% for smooth transition
                      end={stat.count}
                      duration={2} // Short duration for smooth animation
                      separator=","
                    />
                    <span>+</span>
                  </>
                )}
              </h2>
              <p className="stats-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
