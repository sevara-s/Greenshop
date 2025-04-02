import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../../generics/store";
import { CartType } from "../../../@types";

interface InitialStateType {
  data: CartType[];
}

interface UpdatePayload {
  _id: string;
}

const initialState: InitialStateType = {
  data: getStore("data") || [],
};

export const shopSlice = createSlice({
  name: "shop",  
  initialState,
  reducers: {
    addData(state, action: PayloadAction<CartType>) {
      const payload = action.payload;
      const findData = state.data.find((item) => item._id === payload._id);
      
      if (findData) {
        state.data = state.data.map((value) => {
          if (value._id === payload._id) {
            const newCount = (value.count || 0) + 1;
            return {
              ...value,
              count: newCount,
              userPrice: newCount * value.price,
            };
          }
          return value;
        });
      } else {
        state.data = [
          ...state.data,
          { ...payload, count: 1, userPrice: payload.price },
        ];
      }
      setStore("data", state.data);
    },

    increment(state, action: PayloadAction<UpdatePayload>) {
      state.data = state.data.map((value) => {
        if (value._id === action.payload._id) {
          const newCount = (value.count || 0) + 1;
          return {
            ...value,
            count: newCount,
            userPrice: newCount * value.price,
          };
        }
        return value;
      });
      setStore("data", state.data);
    },

    decrement(state, action: PayloadAction<UpdatePayload>) {
      state.data = state.data.map((value) => {
        if (value._id === action.payload._id) {
          const currentCount = value.count || 0;
          const newCount = Math.max(0, currentCount - 1);  
          return {
            ...value,
            count: newCount,
            userPrice: newCount * value.price,
          };
        }
        return value;
      });
      setStore("data", state.data);
    },

    deleteShopCard(state, action: PayloadAction<UpdatePayload>) {
      state.data = state.data.filter((value) => value._id !== action.payload._id);
      setStore("data", state.data);
    },
  },
});

export const { addData, increment, decrement, deleteShopCard } = shopSlice.actions;
export default shopSlice.reducer;