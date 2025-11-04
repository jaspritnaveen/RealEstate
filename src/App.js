// src/App.js

import "./App.css";
import Header from "./Components/Navbar/Header";
import Hero from "./Components/Hero/Hero";
// NOTE: Assuming ServicesSection exists and is needed
import ServicesSection from "./Components/ServiceCard/ServiceCard.jsx";
import FeaturedListings from "./Components/FeaturedListings/FeaturedListings.jsx";
import AllPropertiesSection from "./Components/AllPropertiesSection/AllPropertiesSection";
import ContactUsSection from "./Components/ContactUs/ContactUsSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// WARNING: PropertyCard and ServiceCard are helper components
// and should NOT be imported or rendered directly in App.js.
// They are used internally by FeaturedListings and ServicesSection.

function App() {
  return (
    <div className="App">
      {/* 1. Navigation always goes first and is often sticky */}
      <Header />

      {/* 2. Main banner/search section */}
      <Hero />

      {/* 3. Core value proposition or services */}
      <ServicesSection />

      {/* 4. Highlighted properties */}
      <FeaturedListings />

      {/* 5. Comprehensive list/section for all listings */}
      <AllPropertiesSection />

      {/* 6. Contact form and location details */}
      <ContactUsSection />

      {/* 7. Footer for copyright and final links */}
      <Footer />
    </div>
  );
}

export default App;
