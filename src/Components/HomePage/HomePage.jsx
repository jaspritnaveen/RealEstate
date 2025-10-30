import React, { useState } from "react";
// All imported images
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

// Define a custom professional color palette for a unique look
const PRIMARY_COLOR = "#00A896"; // Professional Teal/Cyan
const ACCENT_COLOR = "#FFC107"; // Warning/Orange for CTAs

// NOTE: Using a public placeholder URL to avoid local file import errors.
const logoUrl = "https://placehold.co/45x45/00A896/ffffff?text=KPL";

// ===============================================
// 1. HEADER COMPONENT (Refactored)
// ===============================================

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
            {/* Updated navigation links */}
            {["Home", "Buy", "Rent", "Sell", "All Properties", "Contact"].map(
              (item) => (
                <li className="nav-item" key={item}>
                  <a
                    className={`nav-link ${item === "Home" ? "active" : ""}`}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}

            {/* CTA Button Link using the Accent Color */}
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

// ===============================================
// 2. SEARCH BAR & HERO SECTION (Enhanced)
// ===============================================

const heroBackgroundImage = ``;

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Modal implementation would go here instead of alert()
  };

  return (
    <div
      className="p-5 text-center bg-image d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url("${heroBackgroundImage}")`, // Using the generated image here
        height: "70vh", // Slightly taller
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay to darken background image and add subtle gradient */}
      <div
        className="mask"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      ></div>

      <div className="container position-relative z-1">
        <h1 className="display-3 fw-bolder mb-3 animate__animated animate__fadeInDown">
          Find The Key To Your Success Asset
        </h1>
        <p className="lead mb-5 d-none d-sm-block animate__animated animate__fadeInUp">
          The best properties across India, curated just for you.
        </p>

        {/* Dynamic Search Bar */}
        <form
          className="d-flex justify-content-center animate__animated animate__fadeInUp"
          onSubmit={handleSearch}
        >
          <div className="input-group" style={{ maxWidth: "700px" }}>
            <input
              type="search"
              className="form-control form-control-lg rounded-start shadow-lg"
              placeholder="Enter City, Locality, or Project Name..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              className="btn btn-lg rounded-end fw-bold text-dark px-4 shadow-lg"
              type="submit"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ===============================================
// 3. NEW SECTION: VALUE PROPOSITION / SERVICES
// ===============================================

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

const ServicesSection = () => (
  <section
    id="services"
    className="py-5"
    style={{ backgroundColor: "#f9f9f9" }}
  >
    <div className="container">
      <h2 className="text-center mb-2 fw-bold text-dark">
        Our Core <span style={{ color: PRIMARY_COLOR }}>Services</span>
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

// ===============================================
// 4. FEATURED LISTINGS SECTION (Styled)
// ===============================================

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

const FeaturedListings = () => {
  const featured = [
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
      imageUrl: img4, // Using img4 here
    },
    {
      id: 5,
      title: "Commercial Office Space",
      price: "₹ 3.0 Crore",
      location: "Connaught Place, Delhi",
      imageUrl: img5, // Using img5 here
    },
  ];

  return (
    <section id="featured" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          Featured <span style={{ color: PRIMARY_COLOR }}>Listings</span>
        </h2>
        <div className="row">
          {featured.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        {/* The "View All Properties" button below Featured Listings */}
        <div className="text-center mt-5">
          <a
            href="#all-properties" // Link to the new section
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

// ===============================================
// 6. NEW SECTION: ALL PROPERTIES (Placeholder)
// ===============================================

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

// ===============================================
// 7. NEW SECTION: CONTACT US (with Map and Form)
// ===============================================

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a backend service
    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // Google Map embed URL (placeholder for a location in Chennai)
  // Replace with your desired location's embed URL from Google Maps
  const googleMapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.75549068018!2d80.20731405!3d13.07639535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641b27b9a50b%3A0xf65ee5c0292b3a9!2sNavalur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701198567112!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-dark">
          Get In <span style={{ color: PRIMARY_COLOR }}>Touch</span>
        </h2>
        <div className="row g-4 justify-content-center">
          {/* Google Map Column */}
          <div className="col-lg-6">
            <div className="card p-3 shadow-sm h-100 rounded-4">
              <iframe
                src={googleMapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KANEST Properties Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-lg-6">
            <div className="card p-4 shadow-sm h-100 rounded-4">
              <h5 className="mb-4 fw-bold" style={{ color: PRIMARY_COLOR }}>
                Send us a message
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="form-label visually-hidden"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-pill"
                    id="fullName"
                    name="fullName"
                    placeholder="Your Name..."
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label visually-hidden">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg rounded-pill"
                    id="email"
                    name="email"
                    placeholder="Your Email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="subject"
                    className="form-label visually-hidden"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-pill"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="form-label visually-hidden"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg rounded-4"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-lg rounded-pill fw-bold text-dark"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
      
      </div>
    </section>
  );
};

// ===============================================
// 5. MAIN HOME PAGE COMPONENT
// ===============================================

const HomePage = () => {
  return (
    // Set minHeight to 100vh for the main HomePage container
    <div
      className="HomePage"
      style={{ Height: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Ensure you have linked Bootstrap CSS and Bootstrap Icons in your main HTML file for bi- and component classes to work */}
      <Header />
      <main style={{ flexGrow: 1 }}>
        {" "}
        {/* Allow main content to grow */}
        <Hero />
        <ServicesSection /> {/* New, attractive section */}
        <FeaturedListings />
        <AllPropertiesSection /> {/* New: All Properties Section */}
        <ContactUsSection /> {/* New: Contact Us Section */}
        <footer className="bg-dark text-white-50 py-4 mt-5">
          <div className="container text-center">
            &copy; {new Date().getFullYear()} KANEST Properties PVT LTD. All
            rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
