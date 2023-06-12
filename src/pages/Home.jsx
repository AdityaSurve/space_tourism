import { Link } from "react-router-dom";
import desktopImage from "../assets/home/background-home-desktop.jpg";
import mobileImage from "../assets/home/background-home-mobile.jpg";
import tabImage from "../assets/home/background-home-tablet.jpg";

const Home = () => {
  return (
    <div className="h-screen w-screen p-32 flex justify-start items-center overflow-hidden">
      <div className="flex flex-col max-w-[40%] h-[40%] z-[10000]">
        <div className="font-barlowCondensed text-left font-light capitalize text-[22px] tracking-widest text-medium">
          SO, YOU WANT TO TRAVEL TO
        </div>
        <div className="text-white w-full font-bell text-[150px]">SPACE</div>
        <div className="w-full text-left font-barlow text-[16px] tracking-widest">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <Link
        to={"/destination"}
        className="absolute bottom-24 right-32 hover:ring-[50px] hover:ring-[#97979740] hover:ring-opacity-[10.36%] rounded-full w-[240px] h-[240px] z-[10000] bg-white justify-center font-bell text-[28px] text-black items-center flex tracking-widest transition-all duration-300 hover:text-black"
      >
        EXPLORE
      </Link>
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
