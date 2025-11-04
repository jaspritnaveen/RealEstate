// src/Components/Footer/Footer.jsx
import React from "react";
// import "./Footer.css"; // Optional: for custom styles

const Footer = () => (
  <footer className="bg-dark text-white-50 py-4 mt-5">
    <div className="container text-center">
      © {new Date().getFullYear()} KANEST Properties PVT LTD. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
