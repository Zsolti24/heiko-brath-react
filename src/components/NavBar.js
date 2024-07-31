import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'

export default function NavBar() {
    var time = false;
    var currentMode = "dark";
    function handleThemeChange(){
    if (time===false){
        time=true;
        const logo = document.querySelector('.imgLogo');
        logo.classList.add('spin');
        if(currentMode==="dark"){
            document.body.classList.add('light-mode');
            currentMode = "light";
            console.log("as");
        }
        else{
            document.body.classList.remove('light-mode');
            console.log("dd");
            currentMode = "dark";
        }

        setTimeout(function () {
            logo.classList.remove('spin');
            time=false;
        }, 2500);
    }
    
}

    const [sideBarActiveVar, setSideBarActiveVar] = useState(false);
    function hamburgerHandler(){
        sideBarActiveVar ? setSideBarActiveVar(false) : setSideBarActiveVar(true);
        console.log(sideBarActiveVar)
    }

  return (
        <>
        <div className={sideBarActiveVar ? 'hamburgerIcon SBAHamburgerIcon' : 'hamburgerIcon'} onClick={hamburgerHandler}>
            <Hamburger />
        </div>
        <div className="navBarContainer">
            <div className="navTop">
                <div className="navTopContainer">
                    <img src={require('../images/logo.png')} alt="logo" className="imgLogo" onClick={handleThemeChange} />
                    <div className="navOptions">
                        <div className="navOption">Die Metzgerei</div>
                        <div className="navOption">Dry Aged</div>
                        <div className="navOption">Fleischversand</div>
                        <div className="navOption">Events/Kurse</div>
                        <div className="navOption">Partyservice</div>
                        <div className="navOption">Tagesessen</div>
                        <div className="navOption">Impressum</div>
                        <div className="navOption">Kontakt</div>
                        <div className="navOption downloadOption">
                            <img src={require('../images/pdfVector.png')} alt="" />    
                            download
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBottom">
                <div className="navBottomContainer">
                    <div className="mobiltext">
                        <div className="mobilTextTop">Christmas opentime:</div>
                        <div className="mobilTextBottom">Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</div>
                    </div>

                    <img src={require('../images/clockVector.png')} alt="" className="clockVector" />
                    <div className="DisapearOnMobile"><span className="OpentimeSpan">Opentime:   </span>  Di. - Fr.: 07:00-13:00  und 15:00-18:30.    Sa.:	 07:30	-	12:30</div>
                </div>
            </div>
        </div>
        <div className={sideBarActiveVar===true ? 'sideBar sideBarActive' : 'sideBar'}>
            <div className="sideBarOptions">
                <div className="sideBarOption">Die Metzgerei</div>
                <div className="sideBarOption">Dry Aged</div>
                <div className="sideBarOption">Fleischversand</div>
                <div className="sideBarOption">Events/Kurse</div>
                <div className="sideBarOption">Partyservice</div>
                <div className="sideBarOption">Tagesessen</div>
                <div className="sideBarOption">Impressum</div>
                <div className="sideBarOption">Kontakt</div>
            </div>
        </div>
    </>
  )
}
