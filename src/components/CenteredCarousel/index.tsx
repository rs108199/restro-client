"use client"

import React, { useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Slide from "./Slide";


interface CarouselItem {
  image: string;
  title: string;
}

const data: CarouselItem[] = [
  { image: "https://picsum.photos/id/1015/600/400", title: "Slide 1" },
  { image: "https://picsum.photos/id/1016/600/400", title: "Slide 2" },
  { image: "https://picsum.photos/id/1018/600/400", title: "Slide 3" },
];

// interface CarouselRef {
//   goNext: () => void;
//   goBack: () => void;
// }

const MyCarousel: React.FC = () => {
 const ref = useRef<StackedCarousel | undefined>(undefined);

  return (
    <>
      <div className="w-full overflow-hidden min-h-75">
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => (
            <StackedCarousel
              ref={carouselRef}
              data={data}
              slideComponent={Slide}
              slideWidth={width * 0.35}
              carouselWidth={width}
              maxVisibleSlide={5}
            />
          )}
        />
      </div>
    </>
  );
};

export default MyCarousel;
