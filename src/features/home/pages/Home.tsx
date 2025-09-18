import Hero from "../components/hero/Hero"
import NavBar from "../components/nav/Nav"


function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <Hero/>
    </div>
  )
}

export default Home