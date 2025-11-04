// src/Components/PropertyCard/PropertyCard.jsx
import React from "react";
import { PRIMARY_COLOR, ACCENT_COLOR } from "../../utils/constants";
// import "./PropertyCard.css"; // Optional: for custom styles

const PropertyCard = ({ title, price, location, imageUrl }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div
      className="card shadow-lg h-100 border-0 rounded-4 overflow-hidden"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img
        src={imageUrl}
        className="card-img-top"
        alt={title}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{ color: PRIMARY_COLOR }}>
          {title}
        </h5>
        <h6
          className="card-subtitle mb-2 fw-bolder"
          style={{ color: ACCENT_COLOR }}
        >
          {price}
        </h6>
        <p className="card-text text-muted mb-3">
          <i className="bi bi-geo-alt-fill me-2"></i>
          {location}
        </p>
        <div className="d-grid">
          <a
            href="#"
            className="btn btn-outline-dark rounded-pill fw-bold"
            style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyCard;
