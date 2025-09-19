
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ExpertDoctors from './ExpertDoctors';
import { DoctorsDetails } from "./DoctorsDetails";

export default function ExpertDoctorSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16} // Adjust spacing between slides
        slidesPerView={1} // Default
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        simulateTouch={true}
        speed={2000}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 }, // 👈 Show 5 cards on very large screens (2XL and up)
        }}
        className="pb-10"
      >
        {DoctorsDetails.map((doctor, i) => (
          <SwiperSlide key={i}>
            {/* Optional padding around each card */}
            <div className="px-2">
              <ExpertDoctors {...doctor} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

