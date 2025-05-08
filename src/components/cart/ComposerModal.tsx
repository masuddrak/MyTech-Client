import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidComposerModal } from "../../store/slice/modalSlice";
import "./AddedProductList.css";
import { IoIosClose } from "react-icons/io";

const ComposerModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalValue = useSelector((state:({baseModal:{composerModalValue:boolean}})) => state.baseModal.composerModalValue);
  const dispatch = useDispatch();
  console.log(modalValue, "modalValue");
  const handleClickOutside = useCallback(
    (event:MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        dispatch(hidComposerModal(false));
      }
    },
    [dispatch, modalRef]
  );

  useEffect(() => {
    if (modalValue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalValue, handleClickOutside]);

  return (
    <div className="absolute z-40  h-full  top-0 right-0 w-full bg-slate-800/25">
      <div className="w-full h-full">
        <div
          ref={modalRef}
          className="w-full md:w-[400px] bg-white text-black h-full absolute top-0 right-0  shadow-lg"
        >
          <div className="bg-black flex justify-between items-center text-white px-4 py-2 ">
            <h1>YOUR CART</h1>
            <button onClick={() => dispatch(hidComposerModal(false))}>
              <IoIosClose></IoIosClose>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposerModal;
