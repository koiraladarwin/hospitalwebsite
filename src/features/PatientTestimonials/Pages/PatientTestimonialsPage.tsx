import TestimonialsSlider from "../Components/TestimonialsSlider";

export default function PatientTestimonialsPage()
{
    return(
        <>
            <div className="min-h-screen bg-grey-bg relative overflow-hidden pb-4">

                <h1 className="font-semibold text-4xl pt-15 flex justify-center space-x-2">
                    <span className="text-grey-text">Patient </span> 
                    <span className="text-orange-bg"> Testimonials</span>
                </h1>

                <div className="absolute bottom-0 left-0 w-full h-[600px] bg-slantedGreen clip-slant z-0 "></div>       

                <div>
                    <TestimonialsSlider />          
                </div>

            </div>
            
        </>
    )
}
