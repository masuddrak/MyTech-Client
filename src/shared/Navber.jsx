import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.png"
import { FiGift } from "react-icons/fi";
import PrimaryBtn from "./Buttons/PrimaryBtn";

const Navber = () => {
    return (
        <nav className="max-w-[1320px] mx-auto grid grid-cols-9 justify-between items-center gap-8  py-4 ">
            <div className="h-[52px] col-span-1">
                <img className="h-full p" src={logo} alt="" />
            </div>
            <div className="h-[42px] relative col-span-4">
                <input type="text" placeholder="search" className="px-2 w-full  block h-full outline-0 rounded-[4px]" />
                <IoMdSearch className="text-2xl text-black absolute right-2 top-2"></IoMdSearch>
            </div>
            <div className="flex gap-6 col-span-4 justify-between">
                <div className="flex items-center gap-3">
                    <FiGift className="text-[20px] text-[#ef4a23]"></FiGift>
                    <div className="leading-4">
                        <p >Offers</p>
                        <small className="text-gray-400">Latest Offers</small>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FiGift className="text-[20px] text-[#ef4a23]"></FiGift>
                    <div className="leading-4">
                        <p >Offers</p>
                        <small className="text-gray-400">Latest Offers</small>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FiGift className="text-[20px] text-[#ef4a23]"></FiGift>
                    <div className="leading-4">
                        <p >Offers</p>
                        <small className="text-gray-400">Latest Offers</small>
                    </div>
                </div>
                <div>
                    <PrimaryBtn name="Login"></PrimaryBtn>
                </div>
                
            </div>
        </nav>
    );
};

export default Navber;