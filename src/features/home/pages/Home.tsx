import { useState, useEffect } from "react";

import Footer from "../../Footer/Pages/Footer";
import ExpertDoctorsPage from "../../MeetExpertDoctors/pages/ExpertDoctorsPage";
import PatientTestimonialsPage from "../../PatientTestimonials/Pages/PatientTestimonialsPage";
import Focus from "../components/focus/Focus";
import Hero from "../components/hero/Hero";
import NavBar from "../components/nav/Nav";
import Therapy from "../components/therapy/Therapy";
import { SplashScreen } from "../components/splashscreen/SplashScreen";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";

import logo2 from "../../../assets/logo2.svg";

function Home() {
  const [hasInteracted, setHasInteracted] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);

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


  return (
    <div className="w-full min-h-screen bg-main-bg relative">

      <AnimatePresence mode="wait">
        {!hasInteracted && <SplashScreen key="splash" />}
      </AnimatePresence>

      {hasInteracted && !showNavbar && (
        <motion.div
          className="absolute top-0 left-0 w-full flex justify-start px-10 pt-3 z-50 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onAnimationComplete={() => setShowNavbar(true)}
        >
          <motion.img
            src={logo2} 
            layoutId="App-logo"
            className="w-60"
            transition={{ duration: 0.4, ease: "easeIn" }}
            
          />
        </motion.div>
      )}

      {showNavbar && <NavBar />}

      {hasInteracted && (
         <div className="overflow-x-hidden">
          

         <section id="home">
           <Hero />
         </section>
         <section id="focus">
           <Focus />
         </section>
         <section id="therapy">
           <Therapy />
         </section>

         <section id="doctors">
           <ExpertDoctorsPage />
         </section>

         <section id="testimonials">
           <PatientTestimonialsPage />
         </section>

         <section id="footer">
         <Footer />
         </section>

       </div>
      )}
    </div>
  );
}

export default Home;

