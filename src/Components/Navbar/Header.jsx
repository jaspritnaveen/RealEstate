// src/Components/Navbar/Header.jsx
import React from "react";
import {
  PRIMARY_COLOR,
  ACCENT_COLOR,
  logoUrl,
  navLinks,
} from "../../utils/constants";
// import "./Header.css"; // Optional: for custom styles

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top"
      style={{ minHeight: "70px" }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center py-0" href="#home">
          <img
            src={logoUrl}
            alt="KANEST Properties Logo"
            className="me-3 rounded"
            style={{ width: "45px", height: "45px", objectFit: "cover" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/45x45/00A896/ffffff?text=LOGO";
            }}
          />
          <span
            className="fw-bolder fs-5 text-white text-uppercase"
            style={{ letterSpacing: "1px" }}
          >
            KANEST Properties PVT LTD
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${item === "Home" ? "active" : ""}`}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-4">
              <a
                className="btn fw-bold px-4 py-2 mt-2 mt-lg-0 rounded-pill text-dark text-uppercase shadow-sm"
                href="#contact"
                style={{ backgroundColor: ACCENT_COLOR, fontSize: "0.85rem" }}
              >
                Contact Agent
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
