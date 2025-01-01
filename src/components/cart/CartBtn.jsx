import React from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../store/slice/modalSlice";
import AddedProductList from "./AddedProductList";
import "./AddedProductList.css";
const CartBtn = () => {
  const modalValue = useSelector((state) => state.productModal.modalValue);
  const dispatch = useDispatch();
  console.log(modalValue);
  return (
    <div>
      <div className="z-30 -right-80">
        {modalValue ? (
          <div className="h-[100vh] w-full fixed top-0 right-0 z-30 bg-[#08162150] transition-all duration-1000">
            <AddedProductList></AddedProductList>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className="bg-[#081621] px-4 py-[2px]  border-[1px] border-gray-300 transition-all duration-1000  hover:bg-[#ef4a23]  rounded-md text-white cursor-pointer fixed bottom-4 right-3 z-10"
        onClick={() => dispatch(showModal(true))}
      >
        <sup className="absolute -top-[8px] -right-1 bg-[#ef4a23]  rounded-full px-1 py-2 text-[14px]">
          5
        </sup>
        <div className="space-y-1 py-1">
          <div className="flex justify-center">
            <BsMinecartLoaded className="text-xl"></BsMinecartLoaded>
          </div>

          <p className="text-[10px] text-center">CART</p>
        </div>
      </div>
    </div>
  );
};

export default CartBtn;
