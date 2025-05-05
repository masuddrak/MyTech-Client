import { BsMinecartLoaded } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/slice/modalSlice";
import "./AddedProductList.css";
const CartBtn = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="bg-[#081621] px-4 py-[2px]  border-[1px] border-gray-300 transition-all duration-1000  hover:bg-[#ef4a23]  rounded-md text-white cursor-pointer relative"
        onClick={() => dispatch(showModal(true))}
      >
        <sup className="absolute -top-[8px] -right-1 bg-[#ef4a23] text-white  rounded-full px-1 py-2 text-[14px]">
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
