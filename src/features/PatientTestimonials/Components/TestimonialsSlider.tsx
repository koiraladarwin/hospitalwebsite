import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";

import TestimonialsCard from './TestimonialsCard';
import { TestimonialsDetails } from './TestimonialsDetails';

export default function ExpertDoctorSlider()
{
    return(
        <>
            <div className='px-5 md:px-20 lg:px-32'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={1}
                pagination={{clickable: true, dynamicBullets:true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                simulateTouch={true}
                speed={2000}
                breakpoints={{
                    0: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                    900:{slidesPerView: 2},
                    1024: {slidesPerView: 2},
                    1200: {slidesPerView: 3},

                }}
                className="pb-10"
            >

                {
                    TestimonialsDetails.map((testcard,i) => (
                        <SwiperSlide key={i}>
                            <TestimonialsCard {...testcard}/>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
            </div>
        </>
    )
}
