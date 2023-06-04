import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "./preferenceSlice";
import postReducer from "./postSlice";

export const store = configureStore({
    reducer: {
        preference: preferenceReducer,
        post: postReducer,
    },
});