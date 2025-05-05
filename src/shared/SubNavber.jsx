import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { BsMinecartLoaded } from "react-icons/bs";

import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  hidSidebarModal,
  showModal,
  showSidebarModal,
} from "../store/slice/modalSlice";

const SubNavber = () => {
  const sidebarModalValue = useSelector(
    (state) => state.baseModal.sidebarModalValue
  );
  const dispatch = useDispatch();
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-black  w-full text-white flex  items-center justify-between pt-2 pb-1 xl:hidden fixed  top-0 px-4 h-14 z-10">
        <div className="text-3xl">
          {sidebarModalValue ? (
            <button
              onClick={() => dispatch(hidSidebarModal(false))}
              className=""
            >
              <IoMdClose className="" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(showSidebarModal(true))}
              className=""
            >
              <FaBars className="" />
            </button>
          )}
        </div>
        <NavLink className="h-[40px]" to="/">
          <img className="object-contain h-full" src={logo} alt="" />
        </NavLink>
        <div className="flex items-center gap-2 ">
          <IoMdSearch className="text-2xl"></IoMdSearch>
          <button
            className="relative"
            onClick={() => dispatch(showModal(true))}
          >
            <BsMinecartLoaded className="text-2xl"></BsMinecartLoaded>
            <sup className="absolute -top-[10px] -right-[10px] bg-[#ef4a23]  rounded-full p-[6px] text-[11px]">
              5
            </sup>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubNavber;
