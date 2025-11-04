// src/Components/FeaturedListings/FeaturedListings.jsx
import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
// Assuming constants are imported from a utility file outside the Components folder
import { PRIMARY_COLOR, featuredProperties } from "../../utils/constants";
// import "./FeaturedListings.css"; // Optional: for custom styles

const FeaturedListings = () => {
  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          Featured <span style={{ color: PRIMARY_COLOR }}>Listings</span>
        </h2>
        <div className="row">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        {/* The "View All Properties" button below Featured Listings */}
        <div className="text-center mt-5">
          <a
            href="#all-properties"
            className="btn btn-lg px-5 rounded-pill fw-bold text-white"
            style={{
              backgroundColor: PRIMARY_COLOR,
              borderColor: PRIMARY_COLOR,
            }}
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
