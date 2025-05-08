import { useParams } from "react-router-dom";

import imag3 from "../../public/product-boot.png";
import PaymentCart from "./PaymentCart";
import useAllProduct from "../Hooks/useAllProduct";
import { useState } from "react";

const ProductDetails = () => {
  const { name } = useParams();
  const [regularPay, setRegularPay] = useState(false);
  const [discountPay, setDiscountPay] = useState(false);
  const { products, isLoading } = useAllProduct("", "", "", "", "", "", "", "");
  if (isLoading) {
    return (
      <div className="h-[100vh] bg-white absolute w-full z-['999']">
        <h1 className="text-7xl">Loading.........</h1>
      </div>
    );
  }
  const currentProduct = products.filter((product) => product.name == name)[0];
  const regularPayment = (value) => {
    setRegularPay(value);
    setDiscountPay(false);
  };
  const discountPayment = (value) => {
    setRegularPay(false);
    setDiscountPay(value);
  };
  return (
    <div>
      <section className="py-56 grid grid-cols-3 gap-6">
        <article className="w-full flex flex-col justify-between ">
          <img className="w-full" src={currentProduct.product_image} alt="" />
          <img className="w-full" src={imag3} alt="" />
        </article>
        <article className="col-span-2 ">
          <div className="space-y-3 ">
            <h3 className="text-2xl text-[#2C3A96]">{currentProduct.name}</h3>
            <div className="flex gap-2">
              <p className="bg-white px-2 rounded-full">
                Price:{" "}
                <span className="font-semibold">
                  30,000<span className="font-extrabold text-sm">৳</span>
                </span>
              </p>
              <p className="bg-white px-2 rounded-full">
                Price:{" "}
                <span className="font-semibold">
                  30,000<span className="font-extrabold text-sm">৳</span>
                </span>
              </p>
              <p className="bg-white px-2 rounded-full">
                Price:{" "}
                <span className="font-semibold">
                  30,000<span className="font-extrabold text-sm">৳</span>
                </span>
              </p>
              <p className="bg-white px-2 rounded-full">
                Price:{" "}
                <span className="font-semibold">
                  30,000<span className="font-extrabold text-sm">৳</span>
                </span>
              </p>
              <p className="bg-white px-2 rounded-full">
                Price:{" "}
                <span className="font-semibold">
                  30,000<span className="font-extrabold text-sm">৳</span>
                </span>
              </p>
            </div>
            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold">Key Features</h3>
              <div className="">
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
                <p>Model: Intel Core i3-12100 12th Gen Budget Desktop PC</p>
              </div>
              <button className=" border-b-[1px] border-[#EF4A23] hover:border-b-[2px] text-[#EF4A23] py-1">
                View More Info
              </button>
            </div>
          </div>
          <div>
            <h3 className=" text-xl font-semibold">Payment Options</h3>
            <div className="">
              <PaymentCart
                regularPayment={regularPayment}
                regularPay={regularPay}
                discountPayment={discountPayment}
                discountPay={discountPay}
                product={currentProduct}
              ></PaymentCart>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
// const photos = [imag1, imag2, imag3];
export default ProductDetails;
