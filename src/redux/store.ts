import { configureStore } from "@reduxjs/toolkit";
import { setModalAuthorizationModalVisibility } from "./modalSlice";
import modalSlice from "./modalSlice"


 export const store = configureStore({
    reducer:{
        modalSlice
    },

})

export type DispatchType = typeof store.dispatch
export type Rootstore = ReturnType<typeof store.getState>