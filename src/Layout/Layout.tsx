import { Outlet } from "react-router-dom";
import SubNavber from "../shared/SubNavber";
import Navber from "../shared/Navber";
import Submenu from "../shared/Submenu";
import Footer from "../shared/Footer";

import CartBtn from "../components/cart/CartBtn";
import ClearCart from "../components/cart/ClearCart";
import AddedProductList from "../components/cart/AddedProductList";
import { useSelector } from "react-redux";
import MobileSidebar from "../shared/MobileSidebar";
import { useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const modalValue = useSelector(
    (state: { baseModal: { modalValue: boolean } }) =>
      state.baseModal.modalValue
  );

  const sidebarModalValue = useSelector(
    (state: { baseModal: { sidebarModalValue: boolean } }) =>
      state.baseModal.sidebarModalValue
  );
 
  return (
    <div>
      <div>
        <div className="md:flex hidden ">
          <div className="fixed space-y-4 z-50 bottom-4 right-4">
            <ClearCart></ClearCart>
            <CartBtn></CartBtn>
          </div>
        </div>
        {modalValue && <AddedProductList></AddedProductList>}
      </div>
      <div className="bg-black text-white hidden xl:flex">
        <Navber></Navber>
      </div>
      <div className="sticky top-0 z-20 hidden xl:flex">
        <Submenu></Submenu>
      </div>

      <SubNavber></SubNavber>
      {/* mobile siderbar */}
      <MobileSidebar></MobileSidebar>

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
