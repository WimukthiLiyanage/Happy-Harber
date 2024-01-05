import React from "react";
import webImg from "../assets/web-dev.svg";

const CoursesCard = (props) => {
  return (

    <div className=" flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none w-[400px] h-[355px]  cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all hover:text-[#db58d0]gap-6 mt-6  p-4 ">

        <div className=" w-[250px]">
          <img src={props.img} alt="img" />
        </div>

          <div>
              <h3 className="font-semibold text-lg text-center my-5">
                {props.title}
              </h3>
              <p className="text-lightText text-center md:text-start">
              Find Your  problems and solve through meditation.. be calm..
              </p>
          </div>

    </div>

  );
};

export default CoursesCard;
