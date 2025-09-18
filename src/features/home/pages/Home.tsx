import Focus from "../components/focus/Focus"
import Hero from "../components/hero/Hero"
import NavBar from "../components/nav/Nav"


function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <Hero />
      <Focus />
    </div>
  )
}

export default Home