import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, payload) => {
      state.isOpen = true;
    },
    closeModal: (state, payload) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
