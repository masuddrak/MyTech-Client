import { HiMiniSquaresPlus } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { showComposerModal } from "../../store/slice/modalSlice";
import ComposerModal from "./ComposerModal";

const ClearCart = () => {
  const modalValue = useSelector((state) => state.baseModal.composerModalValue);
  console.log(modalValue, "modalValue");
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className=" ">{modalValue && <ComposerModal></ComposerModal>}</div>
      <div
        className="bg-[#081621] px-4 py-[2px]  border-[1px] border-gray-300 transition-all duration-1000  hover:bg-[#ef4a23]  rounded-md text-white cursor-pointer relative"
        onClick={() => dispatch(showComposerModal(true))}
      >
        <sup className="absolute -top-[8px] -right-1 bg-[#ef4a23] text-white  rounded-full px-1 py-2 text-[14px]">
          0
        </sup>
        <div className="space-y-1 py-1">
          <div className="flex justify-center">
            <HiMiniSquaresPlus className="text-xl"></HiMiniSquaresPlus>
          </div>

          <p className="text-[6px] text-center">COMPARE</p>
        </div>
      </div>
    </div>
  );
};

export default ClearCart;
