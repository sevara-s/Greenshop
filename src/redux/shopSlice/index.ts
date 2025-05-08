import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../generic/store";
import { CardDataType } from "../../@types";

interface InitialStateType {
  data: CardDataType[];

  coupon: number;
}

const initialState: InitialStateType = {
  data: getStore("data") || [],
  coupon: 0,
};
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addData(state, { payload }) {
      const existingProduct = state.data.find(
        (value) => value._id === payload._id
      );

      if (existingProduct) {
        state.data = state.data.map((value) =>
          value._id === payload._id
            ? {
                ...value,
                counter: value.counter + 1,
                userPrice: (value.counter + 1) * value.price,
              }
            : value
        );
      } else {
        state.data = [
          ...state.data,
          { ...payload, counter: 1, userPrice: payload.price },
        ];
      }

      setStore("data", state.data);
    },

    deletedData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      setStore("data", state.data);
    },

    counterEdited(state, { payload }) {
      state.data = state.data.filter((value) => {
        if (value._id === payload.id) {
          if (payload.type === "decrement" && value.counter === 1) {
            return false;
          }

          value.counter =
            payload.type === "increment"
              ? value.counter + 1
              : value.counter - 1;
          value.userPrice = value.counter * value.price;
        }
        return true;
      });

      setStore("data", state.data);
    },
    getCoupon(state, { payload }) {
      state.coupon = payload;
    },
    order(state){
      localStorage.removeItem("data")
      state.coupon=0
      state.data=[]
    }
  },
});

export const { addData, deletedData, counterEdited, getCoupon ,order} =
  shopSlice.actions;
export default shopSlice.reducer;
