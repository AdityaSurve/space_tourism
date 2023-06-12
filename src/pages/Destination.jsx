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
    <div className="h-screen w-screen py-16 px-32 overflow-hidden">
      <div className="flex flex-col w-full h-[80%] mt-28">
        <div className="w-full h-auto py-2 text-left font-barlowCondensed z-[1000]  text-[24px] tracking-widest">
          <span className="font-bold text-gray-600 me-4">01</span>PICK YOUR
          DESTINATION
        </div>
        <div className="w-full flex z-[1000] gap-20 mt-5">
          <img
            src={img}
            alt=""
            className="h-[400px] w-[400px] mt-5 object-contain mx-20"
          />
          <div className="flex flex-col  w-[40%]">
            <div className="h-[32px] text-[16px] tracking-widest  flex gap-10">
              {Destinations.map((link) => {
                return activeLink === link.id ? (
                  <div
                    key={link.id}
                    className="font-barlowCondensed hover:cursor-pointer text-[14px] border-b-2 border-white"
                  >
                    {link.name}
                  </div>
                ) : (
                  <div
                    key={link.id}
                    className="hover:border-b-2 hover:cursor-pointer hover:border-[#ffffff40] font-barlowCondensed text-[14px]"
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
            <div className="font-bell text-[100px]">{name}</div>
            <div className="font-barlow text-[16px] tracking-widest">
              {desc}
            </div>
            <div className="border-b-2 mt-8 border-[#ffffff20]" />
            <div className="flex mt-8 justify-between w-full">
              <div className="w-[50%]">
                <div className="text-medium font-barlowCondensed text-[16px] tracking-widest">
                  AVG. DISTANCE
                </div>
                <div className="text-[26px] text-white font-bell">
                  {distance}
                </div>
              </div>
              <div className="w-[50%]">
                <div className="text-medium font-barlowCondensed text-[16px] tracking-widest">
                  EST. TRAVEL TIME
                </div>
                <div className="text-[26px] text-white font-bell">{travel}</div>
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
