import TestimonialsSlider from "../Components/TestimonialsSlider";

export default function PatientTestimonialsPage() {
  return (
    <>
      <div className="min-h-[84vh] bg-grey-bg relative overflow-hidden pb-4 max-md:pb-18">

        <h1 className="font-semibold text-4xl pt-10  flex justify-center space-x-2">
          <span className="text-grey-text">Patient </span>
          <span className="text-orange-400 font-bold"> Testimonials</span>
        </h1>

        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-slantedGreen clip-slant z-0 "></div>

        <div>
          <TestimonialsSlider />
        </div>

      </div>

    </>
  )
}
