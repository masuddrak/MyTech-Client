import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidModal } from "../../store/slice/modalSlice";
import "./AddedProductList.css";
const AddedProductList = () => {
  const modalRef = useRef(null);
  const modalValue = useSelector((state) => state.productModal.modalValue);
  const getProductList = useSelector((state) => state?.addedProductLists);
  const dispatch = useDispatch();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      dispatch(hidModal(false));
    }
  };

  useEffect(() => {
    if (modalValue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalValue]);
  console.log("getProductList", getProductList);
  return (
    <div
      className="primaryB"
      ref={modalRef}
      style={{
        padding: "20px",
        width: "300px",
        position: "absolute",
        right: 0,
        top: 0,
        background: "",
        height: "100%",
      }}
    >
      <h1>This is counter App with Redux</h1>
      <div style={{ position: "absolute", right: 0, top: 0, margin: "10px" }}>
        <button onClick={() => dispatch(hidModal(false))}>Hide</button>
      </div>
      <div>
        {getProductList?.addedProductList?.map((product) => (
          <div key={product._id}>
            <h5>{product.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddedProductList;
