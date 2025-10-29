import React from "react";
// FIX: Replaced the local file import with a public image URL
// to resolve the 'Could not resolve' error and ensure the component runs.
// You can replace this URL with the final public link to your logo later.
const logoUrl = "https://placehold.co/45x45/6c757d/ffffff?text=KPL";

// This component uses Bootstrap 5 classes, assuming the Bootstrap CSS is linked in your main index.html or imported elsewhere.
const Header = () => {
  return (
    // Navbar container:
    // Switched to bg-dark for a sleek, corporate look.
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top"
      style={{ minHeight: "70px" }}
    >
      <div className="container">
        {/* Brand/Logo - Now a clean, single horizontal line */}
        <a className="navbar-brand d-flex align-items-center py-0" href="#home">
          <img
            // Using the logo URL instead of the failed import
            src={logoUrl}
            alt="KANEST Properties Logo"
            className="me-3 rounded" // Increased margin for better separation
            style={{ width: "45px", height: "45px", objectFit: "cover" }} // Slightly larger logo
            // Added error fallback just in case the placeholder fails
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/45x45/495057/ffffff?text=LOGO";
            }}
          />

          {/* Company Name, prominent and uppercase */}
          <span
            className="fw-bolder fs-5 text-white text-uppercase"
            style={{ letterSpacing: "1px" }}
          >
            KANEST Properties PVT LTD
          </span>

          {/* Tagline removed as requested */}
        </a>

        {/* Toggler button for mobile view */}
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

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#buy">
                Buy
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#rent">
                Rent
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sell">
                Sell
              </a>
            </li>

            {/* CTA Button Link - Enhanced to stand out against the dark background */}
            <li className="nav-item ms-lg-4">
              <a
                className="btn btn-warning fw-bold px-4 py-2 mt-2 mt-lg-0 rounded-pill text-dark text-uppercase shadow-sm"
                href="#contact"
                style={{ fontSize: "0.85rem" }}
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
