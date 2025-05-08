import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidModal } from "../../store/slice/modalSlice";
import "./AddedProductList.css";
import { IoIosClose } from "react-icons/io";

interface State {
  baseModal: {
    modalValue: boolean;
  };
  addedProductLists: {
    addedProductList: Array<{
      _id: string;
      name: string;
    }> | null;
  };
 }
const AddedProductList = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalValue = useSelector((state:State) => state.baseModal.modalValue);
  const getProductList = useSelector((state:State) => state?.addedProductLists);
  const dispatch = useDispatch();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
      <div className="w-full h-full">
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
          <div>
            {getProductList?.addedProductList?.map((product) => (
              <div key={product._id}>
                <h5>{product.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedProductList;
