import desktopImage from "../assets/home/background-home-desktop.jpg";
import mobileImage from "../assets/home/background-home-mobile.jpg";
import tabImage from "../assets/home/background-home-tablet.jpg";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <img
        src={desktopImage}
        alt=""
        className="hidden lg:block fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
      />
      <img
        src={tabImage}
        alt=""
        className="hidden md:block lg:hidden fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
      />
      <img
        src={mobileImage}
        alt=""
        className="sm:block md:hidden fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Home;
