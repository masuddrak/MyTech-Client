import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  addedProductList: [],
  quntity: 0,
};
export const addedProductCardSlice = createSlice({
  name: "addedProductLists",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.addedProductList.push(action.payload);
    },
    incremtQuntity: (state, action) => {
      state.quntity = action.payload;
    },
    controlQuntity: (state, action) => {
      state.quntity = action.payload;
    },
  },
});
export const { addProduct, incremtQuntity, controlQuntity } =
  addedProductCardSlice.actions;
export default addedProductCardSlice.reducer;
