import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32  shadow-[0_3px_10px_rgb(0,0,0,0.1)] bg-fuchsia-300">
        <div>
          <Link to="/" className=" font-extrabold text-2xl p-1 cursor-pointer">
          Happy Harbor
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 p-1 text-lg font-bold">
          <Link
            to="aiguru"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#db58d0] transition-all cursor-pointer  "
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
         <a>

         </a>
          
        
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
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
    </div>
  );
};

export default Navbar;
