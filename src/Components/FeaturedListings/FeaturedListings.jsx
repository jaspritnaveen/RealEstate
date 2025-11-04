// src/Components/FeaturedListings/FeaturedListings.jsx
import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
// REMOVED: import { PRIMARY_COLOR, featuredProperties } from "../../utils/constants";
// import "./FeaturedListings.css"; // Optional: for custom styles

// --- Local Hardcoded Constants and Data ---
const MANUAL_PRIMARY_COLOR = "#00A896";

// NOTE: You must ensure img1, img2, etc., are either available
// at a public URL or imported relative to this file's location
// (e.g., import img1 from "../../assets/img1.png";)
// For now, I'll use placeholders for the image paths:
const img1 = "/path/to/img1.png";
const img2 = "/path/to/img2.png";
const img3 = "/path/to/img3.png";
const img4 = "/path/to/img4.png";
const img5 = "/path/to/img5.png";

const featuredProperties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    price: "₹ 2.5 Crore",
    location: "Bandra, Mumbai",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Modern Villa with Pool",
    price: "₹ 1.8 Crore",
    location: "Koramangala, Bengaluru",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "Spacious Studio Flat",
    price: "₹ 65 Lakh",
    location: "Sector 44, Gurugram",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Charming Family Home",
    price: "₹ 1.2 Crore",
    location: "Chennai, Tamil Nadu",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Commercial Office Space",
    price: "₹ 3.0 Crore",
    location: "Connaught Place, Delhi",
    imageUrl: img5,
  },
];
// -----------------------------------------------------------

const FeaturedListings = () => {
  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          Featured <span style={{ color: MANUAL_PRIMARY_COLOR }}>Listings</span>
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
              backgroundColor: MANUAL_PRIMARY_COLOR,
              borderColor: MANUAL_PRIMARY_COLOR,
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
