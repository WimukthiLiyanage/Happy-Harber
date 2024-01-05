import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import Img7 from "../assets/images/pic7.avif";
import Img9 from "../assets/images/pic9.webp";
import Img10 from "../assets/images/pic10.jpg";
import Img11 from "../assets/images/pic11.jpg";
import Img13 from "../assets/images/pic13.jpg";
import Img15 from "../assets/images/pic15.jpg";


const Meditation = () => {
  return (
    <div >

      <div className="text-center pt-12">

      <Heading title1="Meditation" title2="for calm life" />
      </div>
      
      
      {/* className=" grid-cols-2" */}
      <div className=" flex flex-wrap justify-center gap-8 py-4">

          <a href="./src/meditation/Mindfulnes.html"><CoursesCard  img={Img7} title="Mindfulness Meditation" /></a>
          <a href="./src/meditation/Lovingkindness.html"><CoursesCard img={Img9} title="Loving-Kindness Meditation (Metta)" /></a>
          <a href="./src/meditation/Transcendental.html"><CoursesCard img={Img10} title="Transcendental Meditation" /></a>
          <a href="./src/meditation/Yoga.html"><CoursesCard img={Img11} title="Yoga Meditation" /></a>
          <a href="./src/meditation/Bodyscan.html"><CoursesCard img={Img13} title="Body Scan Meditation" /></a>
          <a href="./src/meditation/walking.html"><CoursesCard img={Img15} title="Walking Meditation" /></a>

      </div>

    </div>
  );
};

export default Meditation;
