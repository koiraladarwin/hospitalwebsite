import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import {  Pagination } from "swiper/modules";
import ExpertDoctors from './ExpertDoctors';
export default function ExpertDoctorSlider()
{
    return(
        <>
            <div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true, dynamicBullets:true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                simulateTouch={true}
                speed={2000}

            >
                <SwiperSlide >
                    <ExpertDoctors/>
                </SwiperSlide >
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                <SwiperSlide ><ExpertDoctors/></SwiperSlide>
                
            </Swiper>
            </div>
        </>
    )
}



 
