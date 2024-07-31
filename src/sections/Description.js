import React from 'react';

export default function descriptionSection() {


  return (
    <div className="imageDescriptionSection">
            <div className="imageDescription">
                <div className="Description">
                    <div className="Descriptionh2">Dry aged</div>
                    <div className="Descriptionh3">Alte Wutz, Dry Aged</div>
                    <div className="DescriptionText">
                        <p>Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</p>
                        <p>id latine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</p></div>
                    <div className="DescriptionButtons">
                        <div className="DescriptionButton">Dry aged</div>
                        <div className="DescriptionButton">Alte Wurtz</div>
                    </div>        
                </div>
            </div>
            <div className="imageGalerySide">
                <img src={require('../images/pic1.png')} alt="" className="chosenImage" id="mainImage" />
                <div className="imgGaleryOptions">
                    <img src={require('../images/pic2.png')} alt="" className="smallpic" id="smallpic1"/>
                    <img src={require('../images/pic3.png')} alt="" className="smallpic" id="smallpic2" />
                    <img src={require('../images/pic4.png')} alt="" className="smallpic" id="smallpic3" />
                </div>
            </div>
        </div>
  )
}
