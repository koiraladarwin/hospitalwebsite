import splashScreen from "../../../../assets/splashscreen.png"

export const SplashScreen = () => {
  return (
    <img className="h-screen w-screen select-none pointer-event-none" src={splashScreen} draggable={false}/>
  )
}

