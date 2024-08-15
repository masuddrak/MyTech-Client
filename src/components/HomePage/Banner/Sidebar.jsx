import { IoMdSearch } from "react-icons/io";
import subscrib_image from '../../../assets/subscrip.webp';
const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="bg-[#ffe8a1] px-[30px] py-[25px] space-y-[14px] shadow-md">
                <div className="text-center mb-3">
                    <h3 className="font-bold">Compare Products</h3>
                    <p className="text-gray-500">Choose Two Products to Compare</p>
                </div>
                <div className="h-[42px] relative col-span-4">
                    <input type="text" placeholder="search selct Product" className="px-2 w-full  block h-full outline-0 rounded-[4px]" />
                    <IoMdSearch className="text-2xl text-gray-500 absolute right-2 top-2"></IoMdSearch>
                </div>
                <div className="h-[42px] relative col-span-4">
                    <input type="text" placeholder="search selct Product" className="px-2 w-full  block h-full outline-0 rounded-[4px]" />
                    <IoMdSearch className="text-2xl text-gray-500 absolute right-2 top-2"></IoMdSearch>
                </div>
            </div>
           
            <div className="mt-4 xl:mt-0" >
                <img className="w-full" src={subscrib_image} alt="" />
            </div>
        </div>
    );
};

export default Sidebar;