import { useRef, useState } from "react";
import Slider from "react-slick";
import Header from "./components/Header";
import PhotoCards from "./components/PhotoCards";
import TherapyCards from "./components/TherapyCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Focus() {
  const cardData = Array(5).fill({
    title: "Physiotherapy",
    subtitle: "Restoring Strength, One step at a time",
    description:
      "PhysioTherapy is a treatment through physical exercise and modalities. Physiotherapy enables individuals to develop, maintain, and restore maximum movement and function throughout life.",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div className="w-full h-[850px] bg-[#FAFAFA]">
      <div className="w-full bg-cream px-10 pb-15">
        <Header title="Focus" />
        <PhotoCards />
      </div>

      <div className="py-10 mx-auto -my-20 relative px-10  ">

        <Slider {...settings} ref={sliderRef}>
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
        <div className="flex justify-center gap-3 mt-6 px-5 absolute right-[100px] md:right-[350px] md:bottom-15">
          {cardData.map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleBubbleClick(idx)}
              className={`w-3 h-3 rounded-full border-2 cursor-pointer ${idx === currentSlide
                ? "bg-white border-yellow-400"
                : "bg-yellow-400 border-transparent"
                }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Focus;
