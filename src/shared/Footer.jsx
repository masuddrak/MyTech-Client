import { MdLocalPhone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="max-w-[1320px] mx-auto space-y-5 px-2 pt-10 pb-4">
            <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-14 xl:gap-8">
                <article>
                    <h3 className="text-lg mb-5">SUPPORT</h3>
                    <div className="space-y-4">
                        <div className="flex  items-center gap-2 border-[0.5px] p-3 border-gray-700 hover:border-red-500 rounded-full ">
                            <div >
                                <MdLocalPhone className="md:text-[24px] text-[15px]"></MdLocalPhone>
                            </div>
                            <hr className="border-[0.5px] border-gray-800 h-9" />
                            <div >
                                <p className="text-[12px] text-gray-400">10AM - 7PM</p>
                                <p className="md:text-xl text-[12px] text-[#ef4a23]">16793</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-[0.5px] p-3 border-gray-700 hover:border-red-500 rounded-full ">
                            <div >
                                <FaMapMarkerAlt className="md:text-[24px] text-[15px] "></FaMapMarkerAlt>
                            </div>
                            <hr className="border-[0.5px] border-gray-800 h-9" />
                            <div >
                                <p className="text-[12px] text-gray-400">Store Locator</p>
                                <p className="md:text-xl text-[12px]  text-[#ef4a23]">Find Our Stores</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <h3 className="text-lg mb-5">SUPPORT</h3>
                    <ul className="text-gray-500 text-sm space-y-4" >
                        <li>EMI Terms</li>
                        <li>Privacy Policy</li>
                        <li>Star Point Policy</li>
                        <li>Brands</li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-lg mb-5 "></h3>
                    <ul className="text-gray-500 text-sm space-y-4" >
                        <li> About Us</li>
                        <li>Terms and Conditions</li>
                        <li> Blog</li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-lg mb-5 "></h3>
                    <ul className="text-gray-500 text-sm space-y-4" >
                        <li> Online Delivery</li>
                        <li> Refund and Return Policy</li>
                        <li>  Contact Us</li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-lg mb-5 ">STAY CONNECTED</h3>
                    <ul className="text-gray-500 text-sm space-y-4" >
                        <li className="text-white"> Star Tech Ltd</li>
                        <li> Head Office: 28 Kazi Nazrul Islam</li>
                        <li>Ave,Navana Zohura Square, Dhaka 1000</li>
                        <li>Email:</li>
                        <li className="text-[#ef4a23]">masudranaacb@gmail.com
                        </li>
                    </ul>
                </article>
            </section>
            <section className="md:flex justify-between items-center  border-y-[1px] border-gray-700 py-3">
                <div className="md:flex  gap-6 items-center">
                    <p className="text-gray-500 text-sm">Experience Star Tech App on your mobile:
                    </p>
                    <div className="flex my-5 md:my-0 gap-3">
                        <div className="flex  items-center gap-3 border-[0.5px] px-2 py-1 border-gray-700 hover:border-white rounded-lg">
                            <div>
                                <FaGooglePlay></FaGooglePlay>
                            </div>
                            <div>
                                <p className="text-gray-500 text-[10px]">Download on</p>
                                <p className="text-[12px]">Google Play</p>
                            </div>
                        </div>
                        <div className="flex  items-center gap-3 border-[0.5px] px-2 py-1 border-gray-700 hover:border-white rounded-lg">
                            <div>
                                <FaGooglePlay></FaGooglePlay>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Download on</p>
                                <p className="text-sm">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-800 hover:bg-[#3749bb] rounded-full flex justify-center items-center ">
                        <FaFacebookF></FaFacebookF>
                    </div>
                    <div className="w-10 h-10 bg-gray-800 hover:bg-[#3749bb] rounded-full flex justify-center items-center ">
                        <FaYoutube></FaYoutube>
                    </div>
                    <div className="w-10 h-10 bg-gray-800 hover:bg-[#3749bb] rounded-full flex justify-center items-center ">
                        <FaInstagramSquare></FaInstagramSquare>
                    </div>
                </div>
            </section>
            <section className="text-sm text-gray-600 flex justify-between">
                <p>© 2024 Star Tech Ltd | All rights reserved</p>
                <p>Powered By: Masud Rana</p>
            </section>
        </footer>
    );
};

export default Footer;