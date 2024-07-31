import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'

export default function NavBar() {
  return (
        <>
        <div className='hamburgerIcon'>
            <Hamburger />
        </div>
        <div className="navBarContainer">
            <div className="navTop">
                <div className="navTopContainer">
                    <img src={require('../images/logo.png')} alt="logo" className="imgLogo" />
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
    </>
  )
}
