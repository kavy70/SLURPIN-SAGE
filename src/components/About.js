import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        {/* Section title */}
        <h1 className="about-title">About Us</h1>

        {/* Main content section */}
        <div className="about-main">
          <div className="about-images">
            <img src="farmer.jpg" alt="Farmer" className="main-image" />
            <img src="veggies.jpg" alt="Vegetables" className="sub-image" />
            <div className="experience-box">
              <h2>23+</h2>
              <p>
                Years <br /> Experience
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="company-label">
              <span>Welcome to Slurpin' Sage,where flavor meets freshness</span>
            </div>
            <h1>At Slurpin' Sage, we believe in crafting more than just food and drinks </h1>
            <p>
               we create experiences. Whether you're craving a wholesome smoothie, a refreshing juice, or a hearty bite,
                our menu is thoughtfully curated with quality ingredients and a touch of creativity in every serving.
                Born from a passion for health, taste, and good vibes, Slurpin' Sage is your go-to spot for delicious, nutritious, and feel-good indulgence. 
                We pride ourselves on using fresh, locally-sourced produce,and preparing everything with care because you deserve nothing less.
                  Whether you're sipping, snacking, or staying for a meal, you're always welcome at Slurpin' Sage. 
                  Join us in celebrating good taste, sustainability, and the joy of slurping life’s best flavors.
            </p>
            <div className="features">
              <div className="feature">🌾 The Agriculture Leader</div>
              <div className="feature">🌿 Smart Organic Solutions</div>
            </div>
            <button className="discover-btn">DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
