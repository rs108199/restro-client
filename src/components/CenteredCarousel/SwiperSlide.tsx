"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./swiper-carousel.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const data = [
    { image: "https://picsum.photos/id/1015/600/400", title: "Slide 1" },
    { image: "https://picsum.photos/id/1016/600/400", title: "Slide 2" },
    { image: "https://picsum.photos/id/1018/600/400", title: "Slide 3" },
];

function SwiperCar() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        //   clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
            >
                <SwiperSlide>
                    <img src={data[0].image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={data[1].image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={data[2].image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={data[0].image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={data[1].image} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={data[2].image} alt="slide_image" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default SwiperCar