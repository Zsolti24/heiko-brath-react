import React, { useState } from 'react';

import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';


export default function DescriptionSection() {
    const [mainPicture, setMainPicture] = useState(pic1);
    const [smallPictures, setSmallPictures] = useState([pic2, pic3, pic4]);

    // const swap = (index) => {
    //     setMainPicture(prevMainPicture => {
    //         const newMainPicture = smallPictures[index];
    //         setSmallPictures(prevSmallPictures => {
    //             const newSmallPictures = [...prevSmallPictures];
    //             newSmallPictures[index] = prevMainPicture;
    //             return newSmallPictures;
    //         });
    //         return newMainPicture;
    //     });
    // };

    function swap(index){
        var x = mainPicture;
        setMainPicture(smallPictures[index]);
        setSmallPictures((prevItems) => {
            const newItems = [...prevItems];
            newItems[index] = x;
            return newItems; 
        });
    }


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
                <img src={mainPicture} alt="" className="chosenImage" id="mainImage" />
                <div className="imgGaleryOptions">
                    <img src={smallPictures[0]} onClick={() => swap(0)} alt="" className="smallpic" id="smallpic1"/>
                    <img src={smallPictures[1]} onClick={() => swap(1)} alt="" className="smallpic" id="smallpic2" />
                    <img src={smallPictures[2]} onClick={() => swap(2)} alt="" className="smallpic" id="smallpic3" />
                </div>
            </div>
        </div>
  )
}
