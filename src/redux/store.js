import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";
const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
