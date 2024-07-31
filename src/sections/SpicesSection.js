import React from 'react'

export default function SpicesSection() {
  return (
    <div className="spicesSection">
        <div className="spicesTextSide">
            <div className="spicesTextContainer">
                <div className="spicesTexth1">Custome spices for your meat</div>
                <div className="spicesh2">Turnbeutel nostrud exercitation ullamco 
                    Sprechen Sie deutsch</div>
                <div className="spicesDescription"><p>Odio principes iracundia Müller Rice pri. Ut vel solum mandamus, Kartoffelkopf natum adversarium ei ius, diam Schmetterling honestatis eum.</p>
                    <p>Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
        </div>
        <div className="spicesImageSide">
            <img src={require("../images/spices.jpg")} alt="" className="spicesImage" />
        </div>
    </div>
  )
}
