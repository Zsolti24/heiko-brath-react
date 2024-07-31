import React from 'react';
import NavBar from "./components/NavBar";
import ImageSliderSection from "./sections/imageSliderSection.js";
import DescriptionSection from "./sections/DescriptionSection.js";
import ReservationSection from "./sections/ReservationSection.js";
import ProductSection from "./sections/ProductSection.js";
import SpicesSection from "./sections/SpicesSection.js";
import DeliverySection from "./sections/DeliverySection.js";
import RecordSection from "./sections/RecordSection.js";
import Footer from "./components/Footer.js";


function App() {

  var poppedUp = false;

  let accumulatedScrollTime = 0;
  let lastScrollEventTime = null;
  let popped = false;
  const SCROLL_THRESHOLD = 5000; 
  
  function handleScroll() {
    const currentTime = Date.now();
  
    if (lastScrollEventTime !== null) {
      accumulatedScrollTime += (currentTime - lastScrollEventTime);
    }
  
    lastScrollEventTime = currentTime;
  
    if (accumulatedScrollTime >= SCROLL_THRESHOLD) {
      if(popped === false){
          popped = true;
          poppedUp = true;
          document.body.style.overflow="hidden";
          document.querySelector('.popUp').style.display = "flex";
      }
    }
  }


  function closePopUp(){
    poppedUp = false;
    document.body.style.overflow="auto";    
    document.querySelector('.popUp').style.display = "none";
  }
  
  window.addEventListener('scroll', handleScroll);

  return (
  <>
    <div className="popUp">
      <div className="popUpCanvas">
        <div className="closePopUp" onClick={closePopUp}>X</div>
      </div>
      <div className="sideclick" onClick={closePopUp} />
    </div>
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
