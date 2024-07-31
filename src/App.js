import React from "react";
import NavBar from "./components/NavBar";
import ImageSliderSection from "./sections/imageSliderSection.js";
import DescriptionSection from "./sections/Description.js";
import ReservationSection from "./sections/ReservationSection.js";
import ProductSection from "./sections/ProductSection.js";
import SpicesSection from "./sections/SpicesSection.js";

function App() {
  return (
  <>
    <NavBar />
    <ImageSliderSection />
    <DescriptionSection />
    <ReservationSection />
    <ProductSection />
    <SpicesSection />
  </>
  )
}

export default App;
