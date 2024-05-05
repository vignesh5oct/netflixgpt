import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import functionalityReducer from "./functionalitySlice";

const appStore = configureStore(
    {
        reducer: {
            user:userReducer,
            movies:moviesReducer,
            functionality:functionalityReducer,
        }
    }
);

export default appStore;