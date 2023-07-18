import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "./preferenceSlice";
import sortnotesReducer from "./sortnotesSlice";
import postReducer from "./postSlice";

export const store = configureStore({
    reducer: {
        preference: preferenceReducer,
        sortnotes: sortnotesReducer,
        post: postReducer,
    },
});