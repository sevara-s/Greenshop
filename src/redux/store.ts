import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice"
import couponSlice from "./coupon-slice"

import shopSlice from "./modalSlice/shopSlice"
 export const store = configureStore({
    reducer:{
        modalSlice,
        shopSlice,
        couponSlice
    },

})

export type DispatchType = typeof store.dispatch
export type Rootstore = ReturnType<typeof store.getState>