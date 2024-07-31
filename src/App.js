import React from "react";
import NavBar from "./components/NavBar";
import ImageSliderSection from "./sections/imageSliderSection.js";
import DescriptionSection from "./sections/Description.js";
import ReservationSection from "./sections/ReservationSection.js";
import ProductSection from "./sections/ProductSection.js";
import SpicesSection from "./sections/SpicesSection.js";
import DeliverySection from "./sections/DeliverySection.js";
import RecordSection from "./sections/RecordSection.js";
import Footer from "./components/Footer.js";

function App() {
  return (
  <>
    <NavBar />
    <ImageSliderSection />
    <DescriptionSection />
    <ReservationSection />
    <ProductSection />
    <SpicesSection />
    <DeliverySection />
    <RecordSection />
    <Footer />
  </>
  )
}

export default App;
