import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidModal } from "../../store/slice/modalSlice";
import "./AddedProductList.css";
import { IoIosClose } from "react-icons/io";
import AddProductListCard from "./AddProductListCard";

interface State {
  baseModal: {
    modalValue: boolean;
  };
  addedProductLists: {
    addedProductList: {
      _id: string;
      name: string;
      price: number;
      product_image: string;
    }[];
    quntity: number;
  };
}
const AddedProductList = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalValue = useSelector((state: State) => state.baseModal.modalValue);
  const getProductList = useSelector(
    (state: State) => state?.addedProductLists
  );
  const dispatch = useDispatch();
  console.log(getProductList, "getProductList");
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dispatch(hidModal(false));
      }
    },
    [dispatch, modalRef]
  );

  useEffect(() => {
    if (modalValue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalValue, handleClickOutside]);
  return (
    <div className=" z-50 h-full fixed top-0 right-0 w-full bg-slate-800/25">
      <div className="w-full h-full relative">
        <div
          ref={modalRef}
          className="w-full md:w-[400px] bg-white text-black h-full absolute top-0 right-0  shadow-lg"
        >
          <div className="bg-black flex justify-between items-center text-white px-4 py-2 ">
            <h1>YOUR CART</h1>
            <button onClick={() => dispatch(hidModal(false))}>
              <IoIosClose></IoIosClose>
            </button>
          </div>
          {getProductList?.addedProductList?.length === 0 ? (
            <div>
              <h1 className="text-center text-2xl font-bold mt-10">
                No Product Added
              </h1>
              <p className="text-center text-sm mt-2">
                Please add product to your cart
              </p>
            </div>
          ) : (
            <AddProductListCard getProductList={getProductList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddedProductList;
