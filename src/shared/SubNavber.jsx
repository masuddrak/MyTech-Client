import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { BsMinecartLoaded } from "react-icons/bs";

import logo from '../assets/logo.png'
const SubNavber = () => {
    const [isActive, setActive] = useState(true)
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-black  w-full text-white flex  items-center justify-between pt-2 pb-1 xl:hidden  px-4'>

                <div className="text-3xl">
                    {
                        isActive ? <button
                            onClick={handleToggle}
                            className=''
                        >
                            <FaBars className='' />
                        </button> : <button
                            onClick={handleToggle}
                            className=' '
                        >
                            <IoMdClose className='' />
                        </button>
                    }
                </div>
                <div className="h-[40px]">
                    <img className="object-contain h-full" src={logo} alt="" />
                </div>
                <div className="flex items-center gap-2 ">
                    <IoMdSearch className="text-2xl"></IoMdSearch>
                    <div className="relative">
                        <BsMinecartLoaded className="text-2xl"></BsMinecartLoaded>
                        <sup className="absolute -top-[10px] -right-[10px] bg-[#ef4a23]  rounded-full p-[6px] text-[11px]">5</sup>
                    </div>
                </div>


            </div>

            {/* Sidebar */}
            <div
                className={`z-50 xl:fixed flex flex-col justify-between overflow-y-auto bg-white w-64 h-full space-y-6 absolute top-[54px]   inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  xl:translate-x-0  transition duration-200 ease-in-out`}
            >
                    <div className="flex flex-col mt-2 verflow-y-auto gap-2">
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                        <div className="text-[14px] flex px-[20px] justify-between items-center border-b-[1px] ">
                            <a href="">Desktop</a>
                            <p className="text-3xl font-light text-[#999]">+</p>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default SubNavber;