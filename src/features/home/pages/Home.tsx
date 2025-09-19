import Footer from "../../Footer/Pages/Footer"
import ExpertDoctorsPage from "../../MeetExpertDoctors/pages/ExpertDoctorsPage"
import PatientTestimonialsPage from "../../PatientTestimonials/Pages/PatientTestimonialsPage"
import Focus from "../components/focus/Focus"
import Hero from "../components/hero/Hero"
import NavBar from "../components/nav/Nav"
import Therapy from "../components/therapy/Therapy"


function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <div className="overflow-x-hidden">
        <Hero />
        <Focus />
        <Therapy />
        <ExpertDoctorsPage />
        <PatientTestimonialsPage />
        <Footer />
      </div>
    </div>
  )
}

export default Home
