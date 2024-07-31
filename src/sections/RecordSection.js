import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
            <div className='swipers'>
            <Swiper
                // cssMode={true}
                modules={[Navigation, Mousewheel, Keyboard]}
       
                spaceBetween={50}
                loop={true}
                slidesPerView={3}
                navigation
                ={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                simulateTouch={true}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
                <div className="swiper-button-next SWBT">Next</div>
                <div className="swiper-button-prev SWBT">Prev</div>
            </div>
        </div>
    </div>
  )
}
