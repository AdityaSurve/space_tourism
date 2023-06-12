import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import Links from "../data/Links";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(1);

  useEffect(() => {
    // Find the active link based on the current location
    const active = Links.find((link) => link.link === location.pathname);
    if (active) {
      setActiveLink(active.id);
    }
  }, [location]);

  return (
    <div className="z-[10000] h-32 flex w-full fixed top-0 items-center justify-between">
      <img src={Logo} alt="logo" className="ms-10" />
      <div className="h-[70%] w-[60%] bg-[#ffffff04] flex justify-center items-center gap-16 backdrop-filter backdrop-blur-2xl">
        {Links.map((link) => {
          return activeLink === link.id ? (
            <Link
              to={link.link}
              key={link.id}
              className="flex text-white border-b-2 hover:text-white border-white gap-2 font-barlowCondensed space-x-1 h-full justify-center items-center"
            >
              <span className="font-bold tracking-wider">
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
              <span className="font-bold tracking-wider">
                {link.displayNum}
              </span>
              <span className="tracking-widest">{link.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="border border-[#97979740] absolute top-[50%] left-[10%] w-[32%]" />
    </div>
  );
};

export default Navbar;
