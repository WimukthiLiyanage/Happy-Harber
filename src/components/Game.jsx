import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";
import img1 from "../assets/images/pic1.jpg";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";


const Game = () => {
  return (
    <div className="bg-fuchsia-300 pt-11">
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="play" title2="for relux your's mind" />
      {/* className=" flex flex-col md:flex-row gap-5 mt-5" */}
     <div className="w-full py-12">
     <div className="grid grid-cols-3 justify-between gap-8 md:flex-row  ">
        <a href="./src/games/rock_paper_scissors.html" > <ReviewCard img={img1} className="  mt-5 rounded-full"/></a>
        <a href="./src/games/index.html" ><ReviewCard img={img2} className="  mt-5 "/></a>
        <a href="./src/games/blackjack.html" ><ReviewCard img={img3} className="  mt-5 " /></a>
      </div>
     </div>
    </div>
    </div>
  );
};

export default Game;
