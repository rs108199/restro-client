"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./coverflow.css";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
];

export default function CoverflowCarousel() {
  return (
    <div className="w-full py-20 flex justify-center overflow-hidden">
      {/* Give Swiper breathing room */}
      <div className="w-[90%] max-w-6xl overflow-visible px-24">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          slidesPerView="auto"
          spaceBetween={-40} // balanced overlap
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 260,
            modifier: 1,
            slideShadows: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="!pb-12 !overflow-visible"
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              // LOCK width so centering math is predictable
              className="!w-[420px] !overflow-visible"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
