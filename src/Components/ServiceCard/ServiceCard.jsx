// src/Components/ServicesSection/ServicesSection.jsx
import React from "react";
// Import helper component from its location
import ServiceCard from "../ServiceCard/ServiceCard";

// --- Local Hardcoded Constant ---
const MANUAL_PRIMARY_COLOR = "#00A896";
// ---------------------------------

const ServicesSection = () => (
  <section
    id="services"
    className="py-5"
    style={{ backgroundColor: "#f9f9f9" }}
  >
    <div className="container">
      <h2 className="text-center mb-2 fw-bold text-dark">
        Our Core <span style={{ color: MANUAL_PRIMARY_COLOR }}>Services</span>
      </h2>
      <p className="text-center mb-5 text-muted">
        A dedicated partner for every step of your property journey.
      </p>
      <div className="row">
        <ServiceCard
          iconClass="bi-house-door-fill"
          title="Seamless Buying"
          description="Expert guidance from property selection to final paperwork, ensuring a smooth transaction."
        />
        <ServiceCard
          iconClass="bi-cash-coin"
          title="Smart Selling"
          description="Maximize your property's value with our market analysis and extensive buyer network."
        />
        <ServiceCard
          iconClass="bi-key-fill"
          title="Easy Renting"
          description="Find the perfect tenant or the ideal rental home effortlessly with our verified listings."
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;
