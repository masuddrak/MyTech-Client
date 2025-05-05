import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidSidebarModal } from "../store/slice/modalSlice";

const MobileSidebar = () => {
  const sidebarModalValue = useSelector((state) => state.baseModal.sidebarModalValue)
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const handleClickOutside = useCallback(
      (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          dispatch(hidSidebarModal(false));
        }
      },
      [dispatch, modalRef]
    );
  
    useEffect(() => {
      if (sidebarModalValue) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [sidebarModalValue, handleClickOutside]);
  
  return (
    <div
    ref={modalRef}
      className={`z-[999]  xl:hidden flex flex-col justify-between overflow-y-auto bg-white w-64 md:w-96 h-full space-y-6 fixed  top-[56px] inset-y-0 left-0 transform ${
        !sidebarModalValue && "-translate-x-full"
      }  xl:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div className="flex flex-col mt-2 verflow-y-auto gap-2" >
        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
          <a href="">Desktop</a>
          <p className="text-3xl font-light text-[#999]">+</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
