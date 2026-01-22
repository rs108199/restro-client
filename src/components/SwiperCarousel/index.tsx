"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./swipe-style.css";

const slides = [
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "spagetti.jpg",
    },
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "liquor.jpg",
    },
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "s.jpg",
    },
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "spagetti.jpg",
    },
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "liquor.jpg",
    },
    {
        title: "HALAL",
        desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
        img: "s.jpg",
    },
];

export default function SpotlightCarousel() {
    return (
        <div className="carousel-wrapper">
            <button className="custom-prev nav-btn">
                &#10094;
            </button>
            <Swiper
                modules={[Navigation]}
                loop
                centeredSlides
                slidesPerView={3}
                spaceBetween={40}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                className="spotlight-swiper"
            >
                {slides.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="slide-content">
                            <div className="image-wrapper">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <button>VIEW MORE</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="custom-next nav-btn">
                &#10095;
            </button>
        </div>
    );
}
