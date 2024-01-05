import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between bg-slate-700 text-white border-2 border-lightText rounded-lg md:px-32 p-5">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
          <Link
            to="aiguru"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer"
          >
            Ai-guru
          </Link>
          <Link
            to="chat"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer"
          >
            Chat
          </Link>
          <Link
            to="meditation"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer"
          >
            Meditation
          </Link>
          <Link
            to="games"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer"
          >
            Games
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className=" mt-4 md:mt-0">
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
          Happy Harbor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
