import heroBg from '../../../../assets/heroBg.png'
import Button from '../button/Button'
function Hero() {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='flex flex-col absolute top-20 left-45 gap-4'>
        <div>
          <p className='text-green-medium font-poppins font-extrabold text-5xl leading-13'>A holistic<br />
            approach to <br />
            balance the body, <br />
            mind,and soul.
          </p>
        </div>

        <div className='pt-0'>
          <p className='font-poppins text-gray'>Providing harmless and non-invasive natural therapies<br />
            aiming to to treat each individual health</p>
        </div>

        <div className='flex gap-6 pt-2'>
          <Button title="Book Consultation" bgColor='bg-orange-gradient' textColor='text-white' />
          <Button title="Our services" bgColor='bg-white' textColor='text-black' />
        </div>

      </div>
    </div>
  )
}

export default Hero