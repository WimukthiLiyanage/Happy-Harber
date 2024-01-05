import React from "react";
import img6 from "../assets/images/pic6.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Chat = () => {
  return (
    <div className="bg-fuchsia-300">
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14 ">
      <div className=" w-full md:w-2/4 border-2 border-black rounded-lg">
        <img src={img6} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
      <h2 className=" text-5xl font-semibold leading-tight">
      Chat and,
          <span className="text-[#db58d0]">Relux your mind</span>
        </h2>
        <p className=" text-lightText">
        Chat & Relax: Your Trusted Depression Support Chat Bot – Your emotional sanctuary for safe and compassionate conversations. Our chat bot provides unwavering support and a secure space for trusted discussions, helping you find solace in your journey to well-being
        </p>

        
        <a href="./src/chatbot/standalone-frontend/base.html" ><Button title="Chat and Relux" /></a>
        
      </div>
    </div>
    </div>
  );
};

export default Chat;
