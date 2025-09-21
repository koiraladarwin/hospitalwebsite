import logo2 from "../../../../assets/logo2.svg";

export const SplashScreen = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white text-center gap-10">
      <p className="font-[Akriti-Regular] text-[#73a91b] text-xl md:text-4xl font-semibold mb-4">
        फिजियोथेरेपी, अकुपञ्चर, प्राकृतिक चिकित्सा
      </p>
      <img
        src={logo2}
        alt="Logo"
        className="max-w-[70%] max-h-[40%] w-auto h-auto select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

