import { useState, useEffect } from "react";
import desktopImage from "../assets/destination/background-destination-desktop.jpg";
import mobileImage from "../assets/destination/background-destination-mobile.jpg";
import tabImage from "../assets/destination/background-destination-tablet.jpg";
import Destinations from "../data/Destinations";
const Destination = () => {
  const [activeLink, setActiveLink] = useState(10);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [distance, setDistance] = useState("");
  const [travel, setTravel] = useState("");

  useEffect(() => {
    setName(Destinations[0].name);
    setDesc(Destinations[0].description);
    setImg(Destinations[0].imgUrl);
    setDistance(Destinations[0].distance);
    setTravel(Destinations[0].travel);
  }, []);
  return (
    <div className="h-screen w-screen py-28 lg:py-16 lg:px-32 overflow-hidden">
      <div className="flex flex-col w-full justify-center items-center h-[80] mt-0 lg:mt-28">
        <div className="w-screen lg:w-full h-auto py-0 md:py-2 ms-0 md:ms-20 text-center md:text-left font-barlowCondensed z-[1000] text-[16px] md:text-[20px] lg:text-[24px] tracking-widest">
          <span className="font-bold text-gray-600 me-4">01</span>PICK YOUR
          DESTINATION
        </div>
        <div className="w-[50%] lg:w-full flex lg:flex-row flex-col justify-center lg:justify-start z-[1000] gap-10 lg:gap-20 mt-5">
          <img
            src={img}
            alt=""
            className="h-[125px] w-[125px] md:h-[250px] md:w-[250px] lg:h-[400px] lg:w-[400px] lg:mt-5 object-contain mx-[2.5rem] md:mx-[4.2rem] lg:mx-20"
          />
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[40%]">
            <div className="h-[32px] text-[16px] tracking-widest flex gap-5 md:gap-10">
              {Destinations.map((link) => {
                return activeLink === link.id ? (
                  <div
                    key={link.id}
                    className="font-barlowCondensed hover:cursor-pointer text-[10px] md:text-[14px] border-b-2 border-white"
                  >
                    {link.name}
                  </div>
                ) : (
                  <div
                    key={link.id}
                    className="hover:border-b-2 hover:cursor-pointer hover:border-[#ffffff40] font-barlowCondensed text-[10px] md:text-[14px]"
                    onClick={() => {
                      setActiveLink(link.id);
                      setName(link.name);
                      setDesc(link.description);
                      setImg(link.imgUrl);
                      setDistance(link.distance);
                      setTravel(link.travel);
                    }}
                  >
                    {link.name}
                  </div>
                );
              })}
            </div>
            <div className="font-bell text-[50px] md:text-[100px]">{name}</div>
            <div className="font-barlow text-[8px] md:text-[16px] text-center lg:text-left tracking-widest">
              {desc}
            </div>
            <div className="border-b-2 mt-8 w-full border-[#ffffff20] z-[1000]" />
            <div className="flex flex-col md:flex-row gap-3 md:gap-10 mt-4 md:mt-8 justify-between w-[90%] lg:w-full">
              <div className="w-full md:w-[50%] flex flex-col items-center lg:items-start">
                <div className="text-medium font-barlowCondensed text-[8px] md:text-[16px] tracking-widest">
                  AVG. DISTANCE
                </div>
                <div className="text-[16px] md:text-[26px] text-white font-bell">
                  {distance}
                </div>
              </div>
              <div className="w-full md:w-[50%] flex flex-col items-center lg:items-start">
                <div className="text-medium font-barlowCondensed text-[8px] md:text-[16px] tracking-widest">
                  EST. TRAVEL TIME
                </div>
                <div className="text-[16px] md:text-[26px] text-white font-bell">
                  {travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Destination;
