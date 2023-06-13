import { Link } from "react-router-dom";
import desktopImage from "../assets/home/background-home-desktop.jpg";
import mobileImage from "../assets/home/background-home-mobile.jpg";
import tabImage from "../assets/home/background-home-tablet.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="h-screen text-white w-screen px-10 pt-10 lg:pt-5 overflow-hidden md:p-32  flex justify-start items-start lg:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col lg:w-[40%] h-[40%] z-[1000]">
        <div className="font-barlowCondensed mt-20 md:mt-10 lg:mt-0 text-center lg:text-left font-light capitalize text-[16px] md:text-[22px] tracking-widest text-medium">
          SO, YOU WANT TO TRAVEL TO
        </div>
        <div className="text-white w-full text-center lg:text-left font-bell text-[100px] md:text-[150px]">
          SPACE
        </div>
        <div className="w-full text-center lg:text-left font-barlow text-[12px] md:text-[16px] tracking-widest">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <Link
        to={"/destination"}
        className="absolute bottom-12 right-[27%] md:bottom-16 md:right-[32%] lg:bottom-24 lg:right-32 hover:ring-[75px] hover:ring-[#97979730] hover:ring-opacity-[10.36%] rounded-full w-[160px] h-[160px] md:w-[240px] md:h-[240px] z-[1000] bg-white justify-center font-bell text-[20px] md:text-[28px] text-black items-center flex tracking-widest transition-all duration-300 hover:text-black"
      >
        EXPLORE
      </Link>
      <motion.img
        src={desktopImage}
        alt=""
        className="hidden lg:block fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.img
        src={tabImage}
        alt=""
        className="hidden md:block lg:hidden fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.img
        src={mobileImage}
        alt=""
        className="sm:block md:hidden fixed z-0 top-0 left-0 h-full w-full object-cover object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </motion.div>
  );
};

export default Home;
