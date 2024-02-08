import React from "react";
import {
  darkPhoneCall,
  whitePhoneCall,
  darkLocation,
  whiteLocation,
  darkMail,
  whiteMail,
} from "../assets";
const Content = ({ isDarkMode }) => {
  return (
    <section id="content" className="min-h-screen py-20 md:px-20 sm:px-16 px-2">
      <h1
        className={` w-full text-center font-semibold font-Poppins text-[26px] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Content Me
      </h1>
      <h1
        className={` w-full text-center font-Poppins text-[20px] mt-3 ${
          isDarkMode ? "dark-gradient-text" : "light-gradient-text"
        }`}
      >
        Get In Tough
      </h1>
      <div
        className={`mx-auto py-10 rounded-md w-full xs:max-w-[400px] px-2 sm:px-5 border mt-16 flex flex-col gap-5 ${
          isDarkMode
            ? "bg-[#202020] border-gray-800 text-white"
            : "bg-neutral-200 border-gray-300 text-black"
        }`}
      >
        <a href="tel:09942029462">
          <div
            className={`flex items-center gap-5 w-full border py-4 px-6 rounded-md cursor-pointer hover:-translate-y-1 transition-all  ${
              isDarkMode
                ? "border-[#aa923b] hover:bg-[#ffdd6127]"
                : "border-[#0074cc] hover:bg-[#5cb8ff59]"
            }`}
          >
            <img
              src={isDarkMode ? whitePhoneCall : darkPhoneCall}
              className="w-[30px]"
            />
            <h4>09942029462</h4>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWrRttWbtgNKbxfGhjpnMmjwZPJnGkxndHPcqssRsqxnRgPPBtBxPsksKsKhmClWkZPFbbhFL"
          target="_blank"
        >
          <div
            className={`flex items-center gap-5 w-full border py-4 px-6 rounded-md cursor-pointer hover:-translate-y-1 transition-all  ${
              isDarkMode
                ? "border-[#aa923b] hover:bg-[#ffdd6127]"
                : "border-[#0074cc] hover:bg-[#5cb8ff59]"
            }`}
          >
            <img src={isDarkMode ? whiteMail : darkMail} className="w-[30px]" />
            <h4>aungmyatoo2025@gmail.com</h4>
          </div>
        </a>
        <a href="mailto:aungmyatoo2025@gmail.com" target="_blank">
          <div
            className={`flex items-center gap-5 w-full border py-4 px-6 rounded-md cursor-pointer hover:-translate-y-1 transition-all  ${
              isDarkMode
                ? "border-[#aa923b] hover:bg-[#ffdd6127]"
                : "border-[#0074cc] hover:bg-[#5cb8ff59]"
            }`}
          >
            <img
              src={isDarkMode ? whiteLocation : darkLocation}
              className="w-[30px]"
            />
            My Location
          </div>
        </a>
      </div>
    </section>
  );
};

export default Content;
