import heroBg from '../../../../assets/heroBg.png';
import AppointmentForm from './components/AppointmentForm';

function Hero() {
  return (
    <div
      className="w-full h-[45vh] md:h-[calc(115vh-15vh)] bg-cover bg-center relative overflow-visible"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      <div className='flex flex-col absolute top-15 left-10 [@media(min-width:1152px)]:left-35 lg:top-30 md:left-5 md:top-30 lg:left-20 gap-4'>
        <p className='text-sm font-[Akriti-Regular] font-extrabold lg:text-5xl md:text-4xl md:leading-18'>
          <span className='text-orange-bg'>कमर वा गर्दन <br /></span>
          <span className='text-green pl-17'>दुख्नु भनेको के हो ?</span>
        </p>
      </div>

      <div className="absolute top-[120px] md:top-[465px] w-full px-4 md:px-10 lg:px-20 flex justify-center md:justify-end">
        <div className="w-full max-w-[1600px]">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;
