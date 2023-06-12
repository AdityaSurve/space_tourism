import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Menu from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import Links from "../data/Links";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const active = Links.find((link) => link.link === location.pathname);
    if (active) {
      setActiveLink(active.id);
    }
  }, [location]);

  return (
    <div className="z-[10000] h-24 md:h-32 flex w-full fixed px-5 md:px-0 top-0 items-center md:items-start lg:items-center justify-between">
      <img
        src={Logo}
        alt="logo"
        className="h-[50px] w-[50px] object-contain ms-0 md:ms-10 mt-0 md:mt-5 lg:mt-0"
      />
      <div className="hidden h-[70%] w-[60%] md:px-5 lg:px-0 lg: bg-[#ffffff04] md:flex justify-center items-center md:gap-8 lg:gap-16 backdrop-filter backdrop-blur-2xl">
        {Links.map((link) => {
          return activeLink === link.id ? (
            <Link
              to={link.link}
              key={link.id}
              className="flex text-white border-b-2 hover:text-white border-white gap-2 font-barlowCondensed space-x-1 h-full justify-center items-center"
            >
              <span className="font-bold tracking-wider md:hidden lg:block">
                {link.displayNum}
              </span>
              <span className="tracking-widest">{link.name}</span>
            </Link>
          ) : (
            <Link
              to={link.link}
              key={link.id}
              className="flex text-white hover:text-white hover:border-b-2 hover:border-[#ffffff40]  gap-2 font-barlowCondensed space-x-1 h-full justify-center items-center"
              onClick={() => setActiveLink(link.id)}
            >
              <span className="font-bold tracking-wider md:hidden lg:block">
                {link.displayNum}
              </span>
              <span className="tracking-widest">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="hidden lg:block border border-[#97979740] absolute top-[50%] left-[10%] w-[32%]" />
      {!showMenu && (
        <img
          src={Menu}
          alt=""
          className="h-[30px] w-[30px] object-contain md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
      )}
      {showMenu && (
        <div className="bg-[#ffffff04] backdrop-filter backdrop-blur-2xl h-[100vh] w-[70%] top-0 right-0 fixed z-[10000]">
          <div className="h-xl w-full flex justify-end items-start p-5">
            <img
              src={Close}
              alt=""
              className="h-[25px] w-[25px]  object-contain"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div className="mt-10 flex flex-col items-start gap-8 px-10">
            {Links.map((link) => {
              return (
                <Link
                  to={link.link}
                  key={link.id}
                  className="flex text-white hover:text-white hover:border-b-2 hover:border-[#ffffff40]  gap-2 font-barlowCondensed space-x-1 h-full justify-center items-center"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className="font-bold tracking-wider md:hidden lg:block">
                    {link.displayNum}
                  </span>
                  <span className="tracking-widest">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
