import hotstone from '../../../../../assets/hotstone..jpg'
import manipulation from '../../../../../assets/manipulation.jpeg'
import exercise from '../../../../../assets/Exercise.jpeg'
import acupressure from '../../../../../assets/acupressure.jpeg'

function Image() {
  return (
    <div className='flex gap-4'>
      <div className="flex flex-col gap-4 pt-15">
        <img
          src={hotstone}
          className={`w-40 h-40 rounded-md object-cover`} />
        <img
          src={manipulation}
          className={`w-40 h-40 rounded-md object-cover`} />

      </div>

      <div className="flex flex-col gap-4 pt-5">
        <img
          src={exercise}
          className={`w-40 h-40 rounded-md object-cover`} />
        <img
          src={acupressure}
          className={`w-40 h-40 rounded-md object-cover`} />
      </div>
    </div>
  )
}

export default Image