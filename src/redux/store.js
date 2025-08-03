import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import countersReducer from "../features/counters/redux"; 

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        counters: countersReducer,
    },
    middleware: (getDefualtMiddlewares) => getDefualtMiddlewares().concat(apiSlice.middleware)
})

export default store;