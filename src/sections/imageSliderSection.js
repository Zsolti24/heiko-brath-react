import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pagination1 from '../images/kor1.png';

export default function imageSliderSection() {
  return (
    <div className="imageSliderSection">
    <div className='swiperContainer'>
    <Swiper
        cssMode={true}
        navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className} custom-pagination-bullet">
                          <img src="${pagination1}" alt="Custom pagination" />
                        </span>`;
              },
          }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require('../images/image 14.jpg')} alt="pic" className='swiperPic'/></SwiperSlide>
        <SwiperSlide><img src={require('../images/image 14.jpg')} alt="pic" className='swiperPic'/></SwiperSlide>
        <SwiperSlide><img src={require('../images/image 14.jpg')} alt="pic" className='swiperPic'/></SwiperSlide>
        <SwiperSlide><img src={require('../images/image 14.jpg')} alt="pic" className='swiperPic'/></SwiperSlide>
        <SwiperSlide><img src={require('../images/image 14.jpg')} alt="pic" className='swiperPic'/></SwiperSlide>
        <div className='swiperButtons'>
            <div className='swiperButtonsContainer'>
                <div className="swiper-button-prev-custom">
                    <img src={require('../images/left.png')} alt="Prev" />
                </div>
                <div className="swiper-pagination-custom"></div>
                <div className="swiper-button-next-custom">
                    <img src={require('../images/right.png')} alt="Next" />
                </div>
            </div>
        </div>
      </Swiper>
    </div>
      <div className="imageSliderTextContainer">
        <div className="imageSliderTextLocation">
            <div className="imageSliderTextH1">Heiko Brath
                Metzgermeister</div>
            <div className="imageSliderText">Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax.</div>
        </div>
    </div>
</div>
  )
}
