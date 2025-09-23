
import heroBg from '../../../../assets/heroBg.png';
import AppointmentForm from './components/AppointmentForm';

function Hero() {
  return (
    <div className="w-full md:min-h-[calc(100vh-6rem)] bg-cover bg-center flex flex-col px-4 md:px-10 lg:px-20 py-0">

      {/* Top section: text + image */}
      <div className="flex flex-col-reverse md:flex-row items-end justify-end ps-20 md:items-center  md:justify-around  md:gap-5 ">

        {/* Text */}
        <div className=' flex flex-col '>
          <div className="w-full text-center md:text-left flex justify-center md:justify-start items-start pb-2">
            <p className="text-2xl  font-extrabold md:text-4xl lg:text-5xl xl:text-7xl 3xl:text-8xl leading-snug md:leading-[5rem] 2xl:leading-[6rem]">
              <span className="text-orange-bg font-[Akriti-Regular]">कमर वा गर्दन <br /></span>
              <span className="text-green pl-6 md:pl-12 font-[Akriti-Regular]">दुख्नु भनेको के हो </span>
              <span className='text-green '>?</span>
            </p>
          </div>

          <div className="w-full max-w-[1600px]  flex justify-center md:pt-0  ">
            <AppointmentForm />
          </div>

        </div>

        {/* Image */}
        <div className="w-full md:w-4/5 flex justify-center md:justify-end  items-end ">
          <img
            src={heroBg}
            alt="Hero"
            className="h-[350px] w-auto  md:h-[450px] lg:h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;


