import { createSlice } from "@reduxjs/toolkit";
import type { OrderType } from "../../@types";

interface InitialStateType {
  order: Partial<OrderType> | null; 
}

const initialState: InitialStateType = {
  order: null, 
};
const trackOrderSlice = createSlice({
    name: "trackOrder",
    initialState,
    reducers: {
      setOrder(state, { payload }) {
  
        state.order = {
          ...payload,
          shop_List: payload.shop_List || payload.shop_list || [], 
        };
      },
    },
  });
  

export const { setOrder } = trackOrderSlice.actions;
export default trackOrderSlice.reducer;
