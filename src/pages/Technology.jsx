import desktopImage from "../assets/technology/background-technology-desktop.jpg";
import mobileImage from "../assets/technology/background-technology-mobile.jpg";
import tabImage from "../assets/technology/background-technology-tablet.jpg";
import Tech from "../data/Technology";
import { useState, useEffect } from "react";
const Technology = () => {
  const [activeLink, setActiveLink] = useState(31);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imgPortrait, setImgPortrait] = useState("");
  const [imgLandscape, setImgLandscape] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Tech.findIndex((member) => member.id === activeLink);
      const nextIndex = (currentIndex + 1) % Tech.length;
      const nextMember = Tech[nextIndex];
      setActiveLink(nextMember.id);
      setName(nextMember.name);
      setDesc(nextMember.desc);
      setImgPortrait(nextMember.imgPortrait);
      setImgLandscape(nextMember.imgLandscape);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeLink]);
  useEffect(() => {
    const member = Tech.find((member) => member.id === activeLink);
    setName(member.name);
    setDesc(member.desc);
    setImgPortrait(member.imgPortrait);
    setImgLandscape(member.imgLandscape);
  }, [activeLink]);

  return (
    <div className="h-screen w-screen py-[120px] lg:px-32 overflow-hidden">
      <div className="flex flex-col w-full lg:w-[60%] h-full justify-center">
        <div className="text-left px-32 lg:px-0 text-[24px] font-barlowCondensed">
          <span className="font-bold text-gray-600 me-4">03</span>
          MEET YOUR CREW
        </div>
        <img
          src={imgLandscape}
          alt=""
          className="lg:hidden z-[1000] h-[400px] w-full object-contain mt-10  right-0 bottom-16"
        />
        <div className="flex flex-col items-center lg:items-start h-full px-16 lg:px-0 w-full lg:w-[80%] mt-[180px] lg:mt-20 lg:ms-[180px] tracking-widest">
          <div className="font-barlowCondensed text-center lg:text-left text-medium text-[18px]">
            THE TERMINOLOGY ...
          </div>
          <div className=" font-bell text-center lg:text-left text-[50px]">
            {name}
          </div>
          <div className="text-medium text-center lg:text-left text-[14px] w-[80%] lg:w-full font-barlow leading-7">
            {desc}
          </div>
        </div>
      </div>
      <div className="fixed left-[31%] bottom-[40%] lg:left-[10%] lg:bottom-[20%] flex lg:flex-col gap-5">
        {Tech.map((member) => {
          return activeLink === member.id ? (
            <div
              className="hover:cursor-pointer h-[80px] w-[80px] flex justify-center items-center bg-white border-2 border-medium text-black rounded-full"
              key={member.id}
            >
              {member.id - 30}
            </div>
          ) : (
            <div
              className="hover:cursor-pointer h-[80px] w-[80px] flex justify-center items-center bg-[#00000010] hover:border-white border-2 border-[#ffffff30] text-white rounded-full"
              key={member.id}
              onClick={() => setActiveLink(member.id)}
            >
              {member.id - 30}
            </div>
          );
        })}
      </div>
      <img
        src={imgPortrait}
        alt=""
        className="hidden lg:block z-[1000] fixed w-[30%] object-contain  right-0 bottom-16"
      />
      <img
        src={desktopImage}
        alt=""
        className="hidden lg:block fixed z-[-100] top-0 left-0 h-full w-full object-cover object-center"
      />
      <img
        src={tabImage}
        alt=""
        className="hidden md:block lg:hidden fixed z-[-100] top-0 left-0 h-full w-full object-cover object-center"
      />
      <img
        src={mobileImage}
        alt=""
        className="sm:block md:hidden fixed z-[-100] top-0 left-0 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Technology;
