import ExpertDoctorSlider from "../Components/ExpertDoctorSlider"


export default function ExpertDoctorsPage() {
  return (
    <>
      <div className="bg-orange-bg font-poppins py-10">
        <div className="flex flex-col items-center text-center justify-center gap-5 text-white pt-6">
          <h1 className="text-4xl font-bold">MEET OUR EXPERT DOCTORS</h1>
          <p className="max-w-3xl text-center font-light">Our skilled and compassionate doctors are dedicated to your health and recovery.
            Experience expert care backed by advanced medical technology
          </p>
        </div>

        <ExpertDoctorSlider />

      </div>
    </>
  )
} 
