import React from "react";
import { motion } from "framer-motion";
import img4 from "../assets/images/pic4.webp";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Aiguru = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
        AI-Guru 
          <span className="text-[#db58d0]">-Find problem and get solution</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
        The AI-Guru web application is a powerful and compassionate platform designed to provide support and guidance to individuals dealing with depression. It leverages cutting-edge artificial intelligence and chat avatar technology to offer a personalized and empathetic support system.
        </p>

        
          <a href="./src/Aiguru/first.html"><Button className="hover:text-[#db58d0]"title="Chat with AI-Guru" /></a>
        
      </div>

      <motion.div className=" w-full md:w-2/4 mt-6 magintop border-2 border-black rounded-lg "
      
      intial={{
        x:100,
        y:100,
        }}

        animate={{
        x:0,
        y:0,
        }}
      >
        <img src={ img4} alt="img" class="rounded-[15px]" />
      </motion.div>
    </div>
  );
};

export default Aiguru;
