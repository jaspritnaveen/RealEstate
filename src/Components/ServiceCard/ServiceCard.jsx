// src/Components/ServiceCard/ServiceCard.jsx
import React from "react";
import { PRIMARY_COLOR } from "../../utils/constants";
// import "./ServiceCard.css"; // Optional: for custom styles

const ServiceCard = ({ iconClass, title, description }) => (
  <div className="col-md-4 mb-4">
    <div
      className="text-center p-4 h-100 rounded-4 shadow-sm"
      style={{
        backgroundColor: "white",
        border: `1px solid ${PRIMARY_COLOR}30`,
      }}
    >
      <i
        className={`bi ${iconClass} display-4 mb-3`}
        style={{ color: PRIMARY_COLOR }}
      ></i>
      <h5 className="fw-bold" style={{ color: PRIMARY_COLOR }}>
        {title}
      </h5>
      <p className="text-muted">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
