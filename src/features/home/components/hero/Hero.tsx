
import heroBg from '../../../../assets/heroBg.png';
import AppointmentForm from './components/AppointmentForm';

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] bg-cover bg-center flex flex-col px-4 md:px-10 lg:px-20 py-6">
      
      {/* Top section: text + image */}
      <div className="flex flex-col-reverse md:flex-row items-end justify-end md:items-center  md:justify-around  flex-1">
        
        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left flex justify-center md:justify-end items-end">
          <p className="text-2xl font-[Akriti-Regular] font-extrabold md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-snug md:leading-[4rem] 2xl:leading-[6rem]">
            <span className="text-orange-bg">कमर वा गर्दन <br /></span>
            <span className="text-green pl-6 md:pl-12">दुख्नु भनेको के हो ?</span>
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroBg}
            alt="Hero"
            className="h-[350px] w-auto  md:h-[450px] lg:h-[600px] object-contain"
          />
        </div>
      </div>

      {/* Appointment Form */}
      <div className=" w-full max-w-[1600px] mx-auto">
        <AppointmentForm />
      </div>
    </div>
  );
}

export default Hero;


