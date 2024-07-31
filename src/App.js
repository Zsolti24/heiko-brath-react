import React from "react";
import NavBar from "./components/NavBar";
import ImageSliderSection from "./sections/imageSliderSection.js";
import DescriptionSection from "./sections/Description.js";
import ReservationSection from "./sections/ReservationSection.js";

function App() {
  return (
  <>
    <NavBar />
    <ImageSliderSection />
    <DescriptionSection />
    <ReservationSection />
  </>
  )
}

export default App;
