import React from "react";
import { HiMiniSquaresPlus } from "react-icons/hi2";

const ClearCart = () => {
  return (
    <div className="bg-[#081621] px-3 py-1 rounded-md text-white cursor-pointer fixed bottom-4 right-3 z-10">
      <sup className="absolute -top-[8px] -right-1 bg-[#ef4a23]  rounded-full px-1 py-2 text-[14px]">
        0
      </sup>
      <div className="space-y-1 py-1">
        <div className="flex justify-center">
          <HiMiniSquaresPlus className="text-xl"></HiMiniSquaresPlus>
        </div>

        <p className="text-[10px] text-center">COMPAGE</p>
      </div>
    </div>
  );
};

export default ClearCart;
