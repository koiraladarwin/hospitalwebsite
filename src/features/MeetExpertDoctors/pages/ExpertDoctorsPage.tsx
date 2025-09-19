import ExpertDoctorSlider from "../Components/ExpertDoctorSlider"


export default function ExpertDoctorsPage() {
  return (
    <>
      <div className="bg-orange-bg p-10 font-poppins">

        <div className="flex flex-col items-center text-center justify-center gap-2 text-white pt-6">
          <h1 className="text-2xl font-bold">MEET OUR EXPERT DOCTORS</h1>
          <p className="max-w-xl text-center font-light">Our skilled and compassionate doctors are dedicated to your health and recovery.
            Experience expert care backed by advanced medical technology
          </p>
        </div>

        <ExpertDoctorSlider />

      </div>
    </>
  )
} 
