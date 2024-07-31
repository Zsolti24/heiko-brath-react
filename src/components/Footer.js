import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="footerTop">
        <div className="footerTopContainer">
            <div className="fotterTopLeft">
                <div className="littleIconHolder">
                    <img src={require("../images/littleIcons.png")} alt="" />
                </div>
                <div className="addressesTexrt">Klauprechtstraße  25
                    76137 Karlsruhe, Germany
                    +49 721 358060
                    info@partyservice-brath.de</div>
            </div>
            <div className="footerLogoHolder">
            <img src={require("../images/logo.png")} alt="" className="footerLogoImage" />
        </div>
            <div className="footerTopRight">
                <div className="footerTopRightText">Besuchen Sie uns auf:</div>
                <div className="socialMediaImageHolder">
                    <img src={require("../images/socialMedia.png")} alt="" />
                </div>
            </div>
        </div>
    </div>
    <div className="footerBottom">
        <div className="footerBottomContainer">
            <div className="footerBottomText">© 2020 by Metzgerei Heiko Brath  GmbH, Deutschland</div>
            <div className="footerBottomText">Code and design by <span className="footerBottomTextSP">StudioPresent</span></div>
        </div>
    </div>
</div>

  )
}
