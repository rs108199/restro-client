"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './review-styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from '../../Reviews/ReviewCard';

export default function ReviewCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ReviewCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard/>
                </SwiperSlide><SwiperSlide>
                    <ReviewCard/>
                </SwiperSlide><SwiperSlide>
                    <ReviewCard/>
                </SwiperSlide><SwiperSlide>
                    <ReviewCard/>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
