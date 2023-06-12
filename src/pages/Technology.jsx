import desktopImage from "../assets/technology/background-technology-desktop.jpg";
import mobileImage from "../assets/technology/background-technology-mobile.jpg";
import tabImage from "../assets/technology/background-technology-tablet.jpg";
import Tech from "../data/Technology";
import { useState, useEffect } from "react";
const Technology = () => {
  const [activeLink, setActiveLink] = useState(31);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Tech.findIndex((member) => member.id === activeLink);
      const nextIndex = (currentIndex + 1) % Tech.length;
      const nextMember = Tech[nextIndex];
      setActiveLink(nextMember.id);
      setName(nextMember.name);
      setDesc(nextMember.desc);
      setImg(nextMember.imgURL);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeLink]);
  useEffect(() => {
    const member = Tech.find((member) => member.id === activeLink);
    setName(member.name);
    setDesc(member.desc);
    setImg(member.imgURL);
  }, [activeLink]);

  return (
    <div className="h-screen w-screen py-[150px] px-32 overflow-hidden">
      <div className="flex flex-col w-[60%] h-full justify-center">
        <div className="text-left text-[24px] font-barlowCondensed">
          <span className="font-bold text-gray-600 me-4">02</span>
          MEET YOUR CREW
        </div>
        <div className="flex flex-col h-full w-[80%] mt-20 ms-[180px] tracking-widest">
          <div className="font-barlowCondensed text-medium text-[16px]">
            THE TERMINOLOGY ...
          </div>
          <div className="font-bell text-[60px]">{name}</div>
          <div className="text-medium text-left text-[14px] w-[70%] font-barlow leading-7">
            {desc}
          </div>
        </div>
      </div>
      <div className="fixed bottom-[25%] flex flex-col gap-5">
        {Tech.map((member) => {
          return activeLink === member.id ? (
            <div
              className="h-[80px] w-[80px] flex justify-center items-center bg-white border-2 border-medium text-black rounded-full"
              key={member.id}
            >
              {member.id - 30}
            </div>
          ) : (
            <div
              className="h-[80px] w-[80px] flex justify-center items-center bg-black hover:border-white border-2 border-[#ffffff30] text-white rounded-full"
              key={member.id}
              onClick={() => setActiveLink(member.id)}
            >
              {member.id - 30}
            </div>
          );
        })}
      </div>
      <img
        src={img}
        alt=""
        className="z-[1000] fixed h-[500px] w-[500px] object-fill right-0 bottom-16"
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
