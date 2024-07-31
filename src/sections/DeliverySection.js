import React from 'react'
import Parallax from 'react-rellax'

export default function DeliverySection() {
  return (
    <div className="deliverySection">
      <Parallax speed={0.5}>
        <img src={require("../images/bcgimg.png")} className="bcgImg" alt="" />
      </Parallax>
      <div className="insideImageHolder">
          <div className="deliveryTitle">Fleischversand</div>
          <div className="deliveryButton">Grillkurs</div>
      </div>
    </div>
  )
}
