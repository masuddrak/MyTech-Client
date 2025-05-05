import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modalValue: false,
  composerModalValue: false,
  sidebarModalValue: false,
};
export const modalSlice = createSlice({
  name: "baseModal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modalValue = action.payload;
    },
    hidModal: (state, action) => {
      state.modalValue = action.payload;
    },
    showComposerModal: (state, action) => {
      state.composerModalValue = action.payload;
    },
    hidComposerModal: (state, action) => {
      state.composerModalValue = action.payload;
    },
    showSidebarModal: (state, action) => {
      state.sidebarModalValue = action.payload;
    },
    hidSidebarModal: (state, action) => {
      state.sidebarModalValue = action.payload;
    },
  },
});
export const { showModal, hidModal,showComposerModal,hidComposerModal,showSidebarModal,hidSidebarModal } = modalSlice.actions;
export default modalSlice.reducer;
