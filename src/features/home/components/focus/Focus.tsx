import Header from "./components/Header";
import PhotoCards from "./components/PhotoCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Focus() {

  return (
    <div className="w-full mt-20 bg-main-bg px-10 pb-15">
      <Header title="Focus" />
      <PhotoCards />
    </div>
  );
}

export default Focus;
