import { useRef, useState } from "react";
import Slider from "react-slick";
import TherapyCards from "./components/TherapyCards";
import Header from "../focus/components/Header";


function Therapy() {
  const cardData = Array(5).fill({
    title: "Physiotherapy",
    subtitle: "Restoring Strength, One step at a time",
    description:
      "PhysioTherapy is a treatment through physical exercise and\n electrical modalities. Physiotherapy enables individuals to \n develop, maintain, and restore maximum movement and function\n throughout life.",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);


  const settings = {

    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
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
    <div className="pb-20">
      <div className="mx-auto relative">
        <Header title="Therapies" />
        <Slider  {...settings} ref={sliderRef}>
          {cardData.map((card, index) => (
            <div key={index}>
              <TherapyCards
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            </div>
          ))}
        </Slider>
        <div className="flex justify-center gap-3 mt-6 px-5 absolute right-[100px] bottom:12 md:right-[350px] md:bottom-10">
          {cardData.map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleBubbleClick(idx)}
              className={`w-3 h-3 rounded-full border-2 cursor-pointer ${idx === currentSlide
                ? "bg-main-bg border-yellow-400"
                : "bg-yellow-400 border-transparent"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Therapy
