import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";
import ExpertDoctors from './ExpertDoctors';
import {DoctorsDetails} from "./DoctorsDetails";
export default function ExpertDoctorSlider()
{
    return(
        <>
            <div className='px-5'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true, dynamicBullets:true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                simulateTouch={true}
                speed={2000}
                breakpoints={{
                    0: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 3}
                }}
                className="pb-10"

            >

                {
                    DoctorsDetails.map((doctor,i) => (
                        <SwiperSlide key={i}>
                            <ExpertDoctors {...doctor}/>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
            </div>
        </>
    )
}



 
