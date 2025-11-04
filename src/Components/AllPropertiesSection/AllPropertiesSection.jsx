// src/Components/AllPropertiesSection/AllPropertiesSection.jsx
import React from "react";
// Assuming constants are imported from a utility file outside the Components folder
import { PRIMARY_COLOR } from "../../utils/constants";
// import "./AllPropertiesSection.css"; // Optional: for custom styles

const AllPropertiesSection = () => (
  <section id="all-properties" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold text-dark">
        Explore <span style={{ color: PRIMARY_COLOR }}>All Properties</span>
      </h2>
      <p className="text-center text-muted mb-5">
        Here you would typically find a comprehensive list or a filterable grid
        of all available properties.
      </p>
      {/* You would add a grid of all properties here, possibly with pagination/filters */}
      <div className="text-center">
        <button
          className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2"
          style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
        >
          Load More Properties
        </button>
      </div>
    </div>
  </section>
);

export default AllPropertiesSection;
