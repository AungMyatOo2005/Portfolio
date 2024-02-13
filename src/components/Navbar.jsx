import gitWhite from "../assets/gitWhite.png";
import gitDark from "../assets/gitDark.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import NavActiveController from "../util/NavActiveController";

const Navbar = ({ isDarkMode, setIsDarkMode, toggle, setToggle }) => {
  const handleDarkMode = () => {
    setIsDarkMode((pre) => !pre);
  };

  useEffect(() => {
    document.addEventListener("scroll", NavActiveController);
  }, []);

  return (
    <nav
      className={`fixed flex items-center justify-between py-4 px-6 ss:px-14 sm:px-20 w-full backdrop-blur-[5px] z-[10] ${
        isDarkMode ? "bg-[#16161656]" : "bg-[#b9b9b95d]"
      }
    `}
      onClick={(e) => e.stopPropagation()}
    >
      <h2
        className={` ${
          isDarkMode ? "text-[#f7d557]" : "text-[#0074cc]"
        } text-[20px] font-Poppins font-semibold`}
      >
        aungMyatOo();
      </h2>
      <ul className="text-gray-500 md:flex hidden font-semibold first-ul">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <div className="bar"></div>
      </ul>
      <div className="flex items-center gap-5">
        <button onClick={handleDarkMode}>
          {isDarkMode ? (
            <SunIcon className="w-[30px] text-white" />
          ) : (
            <MoonIcon className="w-[30px] text-black" />
          )}
        </button>
        <a
          className="w-[40px] cursor-pointer active:scale-[0.97] md:flex hidden"
          href="https://github.com/AungMyatOo2005"
          target="_blank"
        >
          <img src={isDarkMode ? gitWhite : gitDark} className="w-full" />
        </a>
        <button
          className="md:hidden block text-white text-[28px] font-semibold font-Poppins"
          onClick={() => setToggle((pre) => !pre)}
        >
          {toggle ? (
            <XMarkIcon
              className={`w-[30px] ${isDarkMode ? "text-white" : "text-black"}`}
            />
          ) : (
            <Bars3BottomRightIcon
              className={`w-[30px] ${isDarkMode ? "text-white" : "text-black"}`}
            />
          )}
        </button>
      </div>

      <div
        className={` ${
          toggle ? "flex md:hidden" : "hidden"
        } flex-col items-center absolute py-6 px-16  top-[70px] right-6  rounded-lg toggle ${
          isDarkMode ? "bg-[#2b2b2b]" : "bg-[#c4c4c4]"
        }`}
      >
        <ul className=" flex flex-col items-center gap-2  text-gray-500 font-semibold second-ul">
          <a
            onClick={() => {
              setToggle((pre) => !pre);
            }}
            href="#home"
          >
            Home
          </a>
          <a
            onClick={() => {
              setToggle((pre) => !pre);
            }}
            href="#about"
          >
            About
          </a>
          <a
            onClick={() => {
              setToggle((pre) => !pre);
            }}
            href="#project"
          >
            Project
          </a>
          <a
            onClick={() => {
              setToggle((pre) => !pre);
            }}
            href="#contact"
          >
            Contact
          </a>
        </ul>
        <a
          className="w-[40px] cursor-pointer active:scale-[0.97] mt-5"
          onClick={() => setToggle((pre) => !pre)}
          href="https://github.com/AungMyatOo2005"
          target="_blank"
        >
          <img src={isDarkMode ? gitWhite : gitDark} className="w-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
