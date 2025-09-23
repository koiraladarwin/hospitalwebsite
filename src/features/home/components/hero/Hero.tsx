import { useRef, useState } from 'react';
import heroBg from '../../../../assets/heroBg.png';
import AppointmentForm from './components/AppointmentForm';
import Slider from 'react-slick';
import backPain from '../../../../assets/joinsPain.jpg'
import neckPain from '../../../../assets/neckPain.jpg'
import kneePain from '../../../../assets/kneePain.jpg'
import jointsPain from '../../../../assets/joinsPain.jpg'


function Hero() {
  const cardData = [
    {
      title: "कमर वा गर्दन",
      subtitle: "दुख्नु भनेको के हो",
      image: heroBg,
    },
    {
      title: "कमर गर्दन",
      subtitle: "दुख्नु भनेको के ",
      image: backPain,
    },
    {
      title: "कमर ",
      subtitle: "दुख्नु ",
      image: neckPain,
    },
    {
      title: "कमर वा गर्दन",
      subtitle: "दुख्नु भनेको हो",
      image: kneePain,
    },
    {
      title: "कमर वा गर्दन",
      subtitle: "दुख्नु के हो",
      image: jointsPain,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const handleBubbleClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <>
      <div className="w-full md:min-h-[calc(100vh-6rem)] bg-cover bg-center flex flex-col px-4 md:px-10 lg:px-20 py-0">

        {/* Slider wraps text + image together */}
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((card, index) => (
            <div key={index}>
              <div className="flex flex-col-reverse md:flex-row items-end justify-end ps-20 md:items-center md:justify-around md:gap-5">

                {/* Text */}
                <div className="flex flex-col">
                  <div className="w-full text-center md:text-left flex justify-center md:justify-start items-start pb-2">
                    <p className="text-2xl font-extrabold md:text-4xl lg:text-5xl xl:text-7xl 3xl:text-8xl leading-snug md:leading-[5rem] 2xl:leading-[6rem]">
                      <span className="text-orange-bg font-[Akriti-Regular]">{card.title}<br /></span>
                      <span className="text-green pl-6 md:pl-12 font-[Akriti-Regular]">{card.subtitle}</span>
                      <span className="text-green">?</span>
                    </p>
                  </div>

                  {/* Form stays fixed below */}
                  <div className="w-full max-w-[1600px] flex justify-center md:pt-0">
                    <AppointmentForm />
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-4/5 flex justify-center md:justify-end items-end">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[350px] w-auto md:h-[450px] lg:h-[600px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center gap-3 mt-6 px-5 absolute right-[100px] bottom:12 md:right-[350px] md:bottom-10">
        {cardData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => handleBubbleClick(idx)}
            className={`w-3 h-3 rounded-full border-2 cursor-pointer ${idx === currentSlide
              ? "bg-main-bg border-dark-green"
              : "bg-dark-green border-transparent"
              }`}
          />
        ))}
      </div>
    </>
  );
}

export default Hero;
