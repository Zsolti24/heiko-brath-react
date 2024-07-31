import React from 'react'

export default function ReservationSection() {
  return (
    <div className="reservationSection">
            <div className="reservationTextSide">
                <div className="reservationTextContainer">
                    <div className="reservationTexth1">Buchen Sie den 
                        Grillkurs jetzt</div>
                    <div className="enumeration">
                        <li>professioneller Lehrer</li>
                        <li>ausgezeichneter Metzger</li>
                        <li>1 Tag</li>
                        <li>lernen Sie die Kunst des Grillens</li>
                    </div>
                    <div className="reservationButton">Grillkurs</div>
                </div>
            </div>
            <div className="reservationImageSlide">
                <img src={require("../images/reserv.jpg")} alt="" className="reservationImage" />
            </div>
        </div>
  )
}
