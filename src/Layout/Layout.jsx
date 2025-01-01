import { Outlet } from "react-router-dom";
import SubNavber from "../shared/SubNavber";
import Navber from "../shared/Navber";
import Submenu from "../shared/Submenu";
import Footer from "../shared/Footer";

import CartBtn from "../components/cart/CartBtn";
import ClearCart from "../components/cart/ClearCart";

const Layout = () => {
  return (
    <div>
      <div className="space-y-4">
        {/* <ClearCart></ClearCart> */}
        <CartBtn></CartBtn>
      </div>
      <div className="bg-black text-white hidden xl:flex">
        <Navber></Navber>
      </div>
      <div className="sticky top-0 z-20 hidden xl:flex">
        <Submenu></Submenu>
      </div>
      <div className="xl:hidden fixed w-full top-0 h-screen z-[120]">
        <SubNavber></SubNavber>
      </div>
      <div className="max-w-[1320px] mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="bg-[#081621] text-white">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
