import Footer from "../../Footer/Pages/Footer"
import ExpertDoctorsPage from "../../MeetExpertDoctors/pages/ExpertDoctorsPage"
import PatientTestimonialsPage from "../../PatientTestimonials/Pages/PatientTestimonialsPage"
import Focus from "../components/focus/Focus"
import Hero from "../components/hero/Hero"
import NavBar from "../components/nav/Nav"


function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <Hero />
      <Focus />
      <ExpertDoctorsPage />
      <PatientTestimonialsPage />
      <Footer />
    </div>
  )
}

export default Home
