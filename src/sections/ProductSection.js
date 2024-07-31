import React from 'react'

export default function ProductSection() {
  return (
<div className="productSection">
        <div className="setmiddle">
            <div className="productMiddleContainer">
                <div className="productTitle">Das Handwerk</div>
                <div className="productSecondTitle">alles über unsere Hausgemachte Produkte</div>
                <div className="productDescription"><p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.</p>
                    <p>Wiener Schnitzel aute irure dolor in Guten Tag mollit anim Stuttgart.</p>
                    <p>id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior</p>
                </div>
                <div className="ProductDescriptionButton">Das Handwerk</div>
            </div>
        </div>
        <div className="vonalConatiner">
            <img src={require("../images/vonal 1.png")} alt="" className="vonal" />
        </div>
        <div className="productImagesContainer">
            <div className="productImages">
                <img src={require("../images/Group 661@2x.png")} alt="" className="pructImage" />
                <img src={require("../images/Group 660@2x.png")} alt="" className="pructImage" />
                <img src={require("../images/Group 659@2x.png")} alt="" className="pructImage" />
                <img src={require("../images/Group 658@2x.png")} alt="" className="pructImage" />
            </div>
        </div>
    </div>

  )
}
