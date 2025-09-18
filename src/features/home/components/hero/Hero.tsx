import heroBg from '../../../../assets/heroBg.png'
import Button from '../button/Button'
function Hero() {
  return (
    <div
      className="w-full h-[50vh] md:h-[100vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='flex flex-col absolute  top-15 left-10 [@media(min-width:1152px)]:left-45  lg:top-20 md:left-5 md:top-20 lg:left-20  gap-4'>
        <div>
          <p className='text-green-medium  text-sm font-poppins font-extrabold lg:text-5xl md:text-4xl md:leading-13'>A holistic<br />
            approach to <br />
            balance the body, <br />
            mind,and soul.
          </p>
        </div>

        <div className="pt-0">
          <p className="font-poppins text-[8px] md:text-base text-gray-700 leading-snug md:leading-relaxed">
            Providing harmless and non-invasive natural therapies<br />
            aiming to treat each individual health
          </p>
        </div>

        <div className='flex gap-2  md:flex-row md:gap-6 pt-2'>
          <Button title="Book Consultation" bgColor='bg-orange-gradient' textColor='text-white' hoverColor='hover:bg-orange-300' />
          <Button title="Our services" bgColor='bg-white' textColor='text-black' hoverColor='hover:bg-slate-100' />
        </div>

      </div>
    </div>
  )
}

export default Hero