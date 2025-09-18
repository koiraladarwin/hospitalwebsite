import hotstone from '../../../../../assets/hotstone..jpg'
import manipulation from '../../../../../assets/manipulation.jpeg'
import exercise from '../../../../../assets/Exercise.jpeg'
import acupressure from '../../../../../assets/acupressure.jpeg'

function Image() {
  return (
    <div className='flex gap-4'>
      <div className="flex flex-col gap-4 pt-15 pl-15">
        <div className="relative w-40 h-40 rounded-md overflow-hidden">
          <img
            src={hotstone}
            className={`w-full h-full rounded-md object-cover`} />
          <p className="absolute w-full top-30 text-center text-gray-600 font-bold bg-transparent-white bg-opacity-50 px-1 rounded font-poppins">
            Hot Stone
          </p>
        </div>

        <div className="relative w-40 h-40 rounded-md overflow-hidden">
          <img
            src={manipulation}
            className={`w-40 h-40 rounded-md object-cover`} />
          <p className="absolute w-full top-30 text-center text-gray-600 font-bold bg-transparent-white bg-opacity-50 px-1 rounded font-poppins">
            Manipulation
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-5">
        <div className="relative w-40 h-40 rounded-md overflow-hidden">
          <img
            src={exercise}
            className={`w-40 h-40 rounded-md object-cover`} />
          <p className="absolute w-full top-30 text-center text-gray-600 font-bold bg-transparent-white bg-opacity-50 px-1 rounded font-poppins">
            Exercise
          </p>
        </div>


        <div className="relative w-40 h-40 rounded-md overflow-hidden">
          <img
            src={acupressure}
            className={`w-40 h-40 rounded-md object-cover`} />
          <p className="absolute w-full top-30 text-center text-gray-600 font-bold bg-transparent-white bg-opacity-50 px-1 rounded font-poppins">
            Acupressure
          </p>
        </div>

      </div>
    </div>
  )
}

export default Image