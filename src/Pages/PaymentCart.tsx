import { useRef, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  incremtQuntity,
  controlQuntity,
} from "../store/slice/addedProductCardSlice";

interface PaymentCartProps {
  regularPayment: (value: boolean) => void;
  discountPayment: (value: boolean) => void;
  regularPay: boolean;
  discountPay: boolean;
  product: { price: number; discount_price: number; _id: string };
}

const PaymentCart: React.FC<PaymentCartProps> = ({
  regularPayment,
  discountPayment,
  regularPay,
  discountPay,
  product,
}) => {
  const getProductList = useSelector((state: { addedProductLists: { addedProductList: { _id: string }[] } }) => state?.addedProductLists);

  const dispatch = useDispatch();
  const [currentProductQuntity, setCurrentProductQuntity] = useState(1);
  let currentOrderPorduct = useRef<HTMLInputElement>(null);

  const getAddProduct = async () => {
    if (currentOrderPorduct.current) {
      setCurrentProductQuntity(parseInt(currentOrderPorduct.current.value));
    }

    const existProduct = getProductList.addedProductList.some(
      (productID) => productID._id == product._id
    );
    if (existProduct) {
      dispatch(controlQuntity(currentProductQuntity));
    } else {
      dispatch(incremtQuntity(currentProductQuntity));
      dispatch(addProduct(product));
    }
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div
          className={`border-[2px] border-black p-3 flex gap-2 items-center cursor-pointer my-3 ${
            regularPay && "border-red-700"
          } `}
          onClick={() => regularPayment(true)}
        >
          <input
            type="radio"
            className="rounded-full p-2 border-[1px] bg-red-700"
            name="hello"
            id=""
            checked={regularPay}
            onChange={() => regularPayment(true)}
          />
          <div className="">
            <p>
              <span className="font-semibold">
                {product.price}
                <span className="font-extrabold text-sm">৳</span>
              </span>
            </p>
            <p>Cash Discount Price</p>
            <p>Online / Cash Payment</p>
          </div>
        </div>
        <div
          className={`border-[2px] border-black p-3 flex gap-2 items-center cursor-pointer my-3 ${
            discountPay && "border-red-700"
          } `}
          onClick={() => discountPayment(true)}
        >
          <input
            type="radio"
            className="rounded-full p-2 border-[1px] bg-red-700"
            name="hello"
            id=""
            checked={discountPay}
            onChange={() => discountPayment(true)}
          />
          <div className="">
            <p>
              <span className="font-semibold">
                {product.discount_price}
                <span className="font-extrabold text-sm">৳</span>
              </span>
            </p>
            <p>Cash Discount Price</p>
            <p>Online / Cash Payment</p>
          </div>
        </div>
      </div>
      {/* create caculation part */}
      <div className="flex space-x-3">
        <div className="flex items-center border-[1px] border-red-400 rounded-md">
          <button
            className="px-2"
            onClick={() => setCurrentProductQuntity(currentProductQuntity + 1)}
          >
            <FiPlus></FiPlus>
          </button>
          <input
            type="text"
            value={currentProductQuntity}
            onChange={(event) => setCurrentProductQuntity(Number(event.target.value) || 1)}
            ref={currentOrderPorduct}
            className="w-[30px] outline-none py-1 text-center border-x-[1px] border-red-400"
          />

          <button
            className="px-2"
            onClick={() => setCurrentProductQuntity(currentProductQuntity - 1)}
          >
            <FiMinus></FiMinus>
          </button>
        </div>
        <div>
          <button
            className="primaryB text-white px-2 py-1"
            onClick={getAddProduct}
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCart;
