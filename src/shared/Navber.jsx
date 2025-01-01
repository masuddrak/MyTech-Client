import { IoMdSearch } from "react-icons/io";
import logo from "../assets/logo.png"
import { FiGift } from "react-icons/fi";

import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import NavberCard from "./NavberCard/NavberCard";
import { IoPersonSharp } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";
import "../../src/shared/NavberCard/NavberCard";

const Navber = () => {
    const { user, logOut } = useAuth()

    return (
        <nav className="max-w-[1320px] mx-auto grid grid-cols-9 justify-between items-center gap-8  py-4 ">
            <div className="h-[52px] col-span-1">
                <Link to="/" className="cursor-pointer"><img className="h-full p" src={logo} alt="" /></Link>
            </div>
            <div className="h-[42px] relative col-span-4">
                <input type="text" placeholder="search" className="px-2 w-full  block text-black h-full outline-0 rounded-[4px]" />
                <IoMdSearch className="text-2xl text-black absolute right-2 top-2"></IoMdSearch>
            </div>
            <div className="flex gap-6 col-span-4 justify-between">
                <NavberCard IoPersonSharp={FiGift} title={"Offers"} decription1={"Latest Offers"} ></NavberCard>

                <NavberCard IoPersonSharp={BsLightningChargeFill} title={"Gadget Fest"} animatinIcon={"charg-icon-zoom"} decription1={"Special Deals"} ></NavberCard>

                <NavberCard IoPersonSharp={IoPersonSharp} title={"Account"}  decription1={"Register"} decription2={"Login"}></NavberCard>
                {/* <div>
                    {
                        user ? <button onClick={() => logOut()}>logout</button> : <Link to="/signIn"><PrimaryBtn name="Login"></PrimaryBtn></Link>
                    }

                </div> */}

                <button className="pc-builder px-3 py-1 rounded-sm font-semibold">PC Builder</button>

            </div>
        </nav>
    );
};

export default Navber;