import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
const Storege = () => {
    return (
        <div className="store-finder rounded-md p-[30px]  md:flex justify-between items-center">
            <div className=" flex  items-center gap-[10px]">
                <FaMapMarkerAlt className="text-[48px]"></FaMapMarkerAlt>
                <div>
                    <h3 className="text-[30px] font-bold">20+ Physical Stores</h3>
                    <p className="text-[18px]">Visit Our Store & Get Your Desired IT Product!</p>
                </div>
            </div>
            <div className="">
                <button className="base-btn flex gap-3">Find Our Store
                <IoMdSearch className="text-xl font-bold"></IoMdSearch></button>
            </div>
        </div>
    );
};

export default Storege;