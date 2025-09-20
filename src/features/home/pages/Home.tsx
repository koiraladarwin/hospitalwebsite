import { useState, useEffect } from "react";

import Footer from "../../Footer/Pages/Footer";
import ExpertDoctorsPage from "../../MeetExpertDoctors/pages/ExpertDoctorsPage";
import PatientTestimonialsPage from "../../PatientTestimonials/Pages/PatientTestimonialsPage";
import Focus from "../components/focus/Focus";
import Hero from "../components/hero/Hero";
import NavBar from "../components/nav/Nav";
import Therapy from "../components/therapy/Therapy";
import { SplashScreen } from "../components/splashscreen/SplashScreen";

function Home() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleUserScroll = () => {
      setHasInteracted(true);

      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };

    window.addEventListener("wheel", handleUserScroll);
    window.addEventListener("touchmove", handleUserScroll);

    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, []);

  if (!hasInteracted) {
    return (<SplashScreen />);
  }

  return (
    <div className="w-full min-h-screen bg-main-bg">
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
  );
}

export default Home;

