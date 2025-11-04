// src/Components/AllPropertiesSection/AllPropertiesSection.jsx
import React from "react";
// REMOVED: import { PRIMARY_COLOR } from "../../utils/constants";

// Define the primary color locally
const MANUAL_PRIMARY_COLOR = "#00A896";

// import "./AllPropertiesSection.css"; // Optional: for custom styles

const AllPropertiesSection = () => (
  <section id="all-properties" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold text-dark">
        Explore{" "}
        <span style={{ color: MANUAL_PRIMARY_COLOR }}>All Properties</span>
      </h2>
      <p className="text-center text-muted mb-5">
        Here you would typically find a comprehensive list or a filterable grid
        of all available properties.
      </p>
      {/* You would add a grid of all properties here, possibly with pagination/filters */}
      <div className="text-center">
        <button
          className="btn btn-outline-dark rounded-pill fw-bold px-4 py-2"
          style={{
            borderColor: MANUAL_PRIMARY_COLOR,
            color: MANUAL_PRIMARY_COLOR,
          }}
        >
          Load More Properties
        </button>
      </div>
    </div>
  </section>
);

export default AllPropertiesSection;
