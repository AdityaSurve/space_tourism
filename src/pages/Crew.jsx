import desktopImage from "../assets/crew/background-crew-desktop.jpg";
import mobileImage from "../assets/crew/background-crew-mobile.jpg";
import tabImage from "../assets/crew/background-crew-tablet.jpg";
import Crews from "../data/Crew";
import { useState, useEffect } from "react";
const Crew = () => {
  const [activeLink, setActiveLink] = useState(21);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  // useEffect(() => {
  //   setName(Crews[0].name);
  //   setTitle(Crews[0].title);
  //   setDesc(Crews[0].desc);
  //   setImg(Crews[0].imgUrl);
  // }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = Crews.findIndex(
        (member) => member.id === activeLink
      );
      const nextIndex = (currentIndex + 1) % Crews.length;
      const nextMember = Crews[nextIndex];
      setActiveLink(nextMember.id);
      setName(nextMember.name);
      setTitle(nextMember.title);
      setDesc(nextMember.desc);
      setImg(nextMember.imgUrl);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeLink]);
  useEffect(() => {
    const initialMember = Crews.find((member) => member.id === activeLink);
    setName(initialMember.name);
    setTitle(initialMember.title);
    setDesc(initialMember.desc);
    setImg(initialMember.imgUrl);
  }, [activeLink]);

  return (
    <div className="relative overflow-hidden">
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-full w-screen tracking-widest bg-[#00000050] backdrop-filter backdrop-blur-sm z-[100] flex flex-col justify-start lg:justify-center items-start p-16 lg:p-32">
          <div className="mt-20">
            <div className="text-left text-[16px] md:text-[20px] lg:text-[24px] font-barlowCondensed">
              <span className="font-bold text-gray-600 me-4">02</span>
              MEET YOUR CREW
            </div>
          </div>
          <div className="h-auto mt-20 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:mb-20 gap-5 lg:gap-0">
            <div className="text-gray-600 text-center lg:text-left text-[28px] lg:text-[32px] font-bell">
              {title}
            </div>
            <div className="text-white text-center lg:text-left text-[40px] lg:text-[60px] font-bell">
              {name}
            </div>
            <div className="text-medium text-center lg:text-left text-[10px] lg:text-[14px] w-[70%] lg:w-[40%] font-barlow leading-7">
              {desc}
            </div>
          </div>
          <div className="fixed left-[42%] bottom-[46%] lg:left-32 lg:bottom-28 flex gap-5 mt-32">
            {Crews.map((member) => {
              return activeLink === member.id ? (
                <div
                  key={member.id}
                  className="h-[16px] w-[16px] rounded-full bg-[#ffffff]"
                />
              ) : (
                <div
                  key={member.id}
                  className="h-[16px] w-[16px] rounded-full bg-[#ffffff50]"
                  onClick={() => {
                    setActiveLink(member.id);
                    setName(member.name);
                    setTitle(member.title);
                    setDesc(member.desc);
                    setImg(member.imgUrl);
                  }}
                />
              );
            })}
          </div>
        </div>
        <img
          src={img}
          alt=""
          className="h-[40%] lg:h-[80%] w-full object-contain absolute bottom-0 left-0 lg:left-[27%]  z-[10000]"
        />
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

export default Crew;
