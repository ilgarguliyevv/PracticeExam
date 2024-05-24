import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slice/clockSlice.js";

export default configureStore({
  reducer: { counter: counterReducer },
});
