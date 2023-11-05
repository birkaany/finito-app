import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    boards: boardsSlice,
    modal: modalSlice,
  },
});

export default store;
