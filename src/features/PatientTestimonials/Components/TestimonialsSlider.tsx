import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import TestimonialsCard from './TestimonialsCard';
import { TestimonialsDetails } from './TestimonialsDetails';

export default function ExpertDoctorSlider() {
  return (
    <div className="">
      <Swiper
        modules={[Pagination]}
        spaceBetween={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        simulateTouch={true}
        speed={2000}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          900: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {TestimonialsDetails.map((testcard, i) => (
          <SwiperSlide key={i}>
            {/* Add padding inside each slide */}
            <div className="px-5 md:px-8 lg:px-12">
              <TestimonialsCard {...testcard} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

