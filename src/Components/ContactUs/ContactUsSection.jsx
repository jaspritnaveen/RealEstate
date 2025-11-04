// src/Components/ContactUs/ContactUsSection.jsx
import React, { useState } from "react";
// Assuming constants are imported from a utility file outside the Components folder
import {
  PRIMARY_COLOR,
  ACCENT_COLOR,
  googleMapEmbedUrl,
} from "../../utils/constants";
// import "./ContactUsSection.css"; // Optional: for custom styles

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
    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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
                {/* ... rest of the form fields ... */}
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
        <div className="row mt-5 justify-content-center g-4">
          <div className="col-md-5">
            <div
              className="card p-4 text-center h-100 shadow-sm border-0 rounded-4"
              style={{ backgroundColor: PRIMARY_COLOR, color: "white" }}
            >
              <i className="bi bi-telephone-fill display-4 mb-3"></i>
              <h5 className="fw-bold">Phone Number</h5>
              <p className="lead m-0">010-020-0340</p>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="card p-4 text-center h-100 shadow-sm border-0 rounded-4"
              style={{ backgroundColor: PRIMARY_COLOR, color: "white" }}
            >
              <i className="bi bi-envelope-fill display-4 mb-3"></i>
              <h5 className="fw-bold">Business Email</h5>
              <p className="lead m-0">info@kanestproperties.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
