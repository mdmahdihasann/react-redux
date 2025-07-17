import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counters/redux";
import postReducers from "../features/posts/postSlice";

const store = configureStore({
    reducer:{
        counters: counterSlice,
        posts: postReducers,
    }
})

export default store;