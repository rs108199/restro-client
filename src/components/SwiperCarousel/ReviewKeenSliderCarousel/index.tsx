"use client";

import "./home-carousel.css";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
// import { NewsArticle } from "@/src/common/interfaces";

const ReviewCarouselBar = ({ valArr }: { valArr?: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      mode: "snap",
      slides: {
        origin: 0,
        perView: 1,
        spacing: 10,
      },
      slideChanged(slider : any) {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
      breakpoints: {
        // Responsive breakpoints
        "(min-width: 600px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 4, spacing: 30 },
        },
      },
    },
    [
      (slider : any) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="p-10">
      <div ref={sliderRef} className="keen-slider" style={{ height: "100%" }}>
        {/* {[].map((val) => ( */}
          <div  className="keen-slider__slide number-slide1">
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            <div className="h-15 bg-black w-20">Here We go</div>
            
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ReviewCarouselBar;
