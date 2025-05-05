import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slice/modalSlice";
import addedProductCardSlice from "./slice/addedProductCardSlice";

export const store = configureStore({
  reducer: {
    baseModal: modalSlice,
    addedProductLists: addedProductCardSlice,
  },
});
