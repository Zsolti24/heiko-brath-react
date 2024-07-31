import React from 'react'

export default function RecordSection() {
  return (
<div className="recordsSection">
        <div className="recordContainer">
            <div className="titlePart">
                <div className="thisSide">
                    <img src={require("../images/recordLogo.png")} alt="" />
                </div>
                <div className="otherSide">
                    <div className="otherSideText">Metzgerei Brath ist Mitglied 
                        im Genussnetzwerk</div>
                        <div className="redButton">Gehen zu site</div>
                </div>
            </div>
            <div className="imgContainerVonal">
                <img src={require("../images/vonal 1.png")} alt="" />
            </div>
            <div className="Medals">
                <div className="medalText">Auszeichnungen</div>
                <div className="medalComponent">
                    <div className="medalImageHolder">
                        <img src={require("../images/nagrada1.png")} alt="" />
                    </div>
                    <div className="medalComponentText">Tollit argumentum genau
                        Saepe lobortis</div>
                </div> 
                <div className="medalComponent">
                    <div className="medalImageHolder">
                        <img src={require("../images/nagrada2.png")} alt="" className="medalImg" />
                    </div>
                    <div className="medalComponentText">Schneewittchen
                        denique</div>
                </div>
                <div className="medalComponent">
                    <div className="medalImageHolder">
                    <img src={require("../images/nagrada3.png")} alt="" />
                </div>
                    <div className="medalComponentText">Grimms Märchen 
                        expetenda</div>
                </div>
                <div className="medalComponent">
                    <div className="medalImageHolder">
                        <img src={require("../images/nagrada4.png")} alt="" />
                    </div>
                    <div className="medalComponentText">Mettwurst mei 
                        ullum gloriatur.</div>
                </div>
            </div>
            <div className="imgContainerVonal">
                <img src={require("../images/vonal 1.png")} alt="" />
            </div>
            <div className="Recommendation">Empfehlungs</div>
            <div className="RecommendationTitle">Was die Leute über uns sagen</div>
            
            <div className="carousel-container">
                <button id="prev" className="arrow"><img src={require("../images/left.png")}  className="ArrowPic" alt="" /></button>
                <div className="carousel">
                    <div className="card">
                        <div className="message">Sprechen Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.</div>
                        <div className="sender">Maria Kartofeln</div>
                    </div>
                    <div className="card large">
                        <img src={require("../images/grillkurs_icon.png")} alt="" />
                        <img src={require("../images/zvezdice.png")} alt="" />
                        <div className="messageLarge">Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart ut labore et dolore magna  Luftballons Ut Turnbeutel nostrud exercitation ullamco .</div>
                        <div className="senderLarge">Halling Tobias</div>
                        <div className="textLarge">Koch</div>
                        <img src={require("../images/znak.png")} alt="" className="znak" />
                    </div>
                    <div className="card">
                        <div className="message">Achtung fur atine indoctum complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.</div>
                        <div className="sender">Rene Weinstein</div>
                    </div>
                </div>
                <button id="next" className="arrow"><img src={require("../images/right.png")} className="ArrowPic" alt="" /></button>
            </div>
            <div className="buttonContainer">
                <div className="redButton">Alle Berichte</div>
            </div>


        </div>
    </div>

  )
}
