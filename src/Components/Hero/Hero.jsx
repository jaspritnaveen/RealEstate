// src/Components/Hero/Hero.jsx
import React, { useState } from "react";
// ACCENT_COLOR is no longer imported as its usage will be replaced by a CSS class
// import { ACCENT_COLOR } from "../../utils/constants"; // REMOVED
import "./Hero.css";
// Ensure the CSS file is imported if you move styles there
// import "./Hero.css";

const heroBackgroundImage = ``;

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div
      className="p-5 text-center bg-image d-flex align-items-center justify-content-center hero-container" // Added .hero-container class
      style={{
        backgroundImage: `url("${heroBackgroundImage}")`,
        height: "70vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
      id="home"
    >
      {/* Overlay to darken background image and add subtle gradient */}
      <div
        className="mask hero-overlay" // Added .hero-overlay class
        // REMOVED: Inline style for background gradient
        // You MUST define this style in src/Components/Hero/Hero.css instead.
      ></div>

      <div className="container position-relative z-1">
        <h1 className="display-3 fw-bolder mb-3 animate__animated animate__fadeInDown">
          Find The Key To Your Success Asset
        </h1>
        <p className="lead mb-5 d-none d-sm-block animate__animated animate__fadeInUp">
          The best properties across India, curated just for you.
        </p>

        {/* Dynamic Search Bar */}
        <form
          className="d-flex justify-content-center animate__animated animate__fadeInUp"
          onSubmit={handleSearch}
        >
          <div className="input-group" style={{ maxWidth: "700px" }}>
            <input
              type="search"
              className="form-control form-control-lg rounded-start shadow-lg"
              placeholder="Enter City, Locality, or Project Name..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              className="btn btn-lg rounded-end fw-bold text-dark px-4 shadow-lg hero-search-btn" // Added .hero-search-btn class
              type="submit"
              // REMOVED: Inline style for background color (ACCENT_COLOR)
              // style={{ backgroundColor: ACCENT_COLOR }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
