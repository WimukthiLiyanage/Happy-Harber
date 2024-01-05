import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="block justify-center items-center bg-stone-50 px-2 rounded-lg">

        <div className="w-[340px] h-[260px] p-8">
          <p className=" text-lightText text-center">
          Enjoy a Simple Computer Game to Unwind: Escape into a world of relaxation with our easy-to-play computer game. Recharge your mind, destress, and find a moment of tranquility.
          </p>
        </div>

      <div className=" flex flex-row justify-center pb-11">
        <img className=" rounded-full w-1/2" src={props.img} alt="img" />
      </div>


    </div>
  );
};

export default ReviewCard;
