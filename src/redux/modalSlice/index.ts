import { createSlice } from "@reduxjs/toolkit";
interface InitialStateType {
  modalAuthVisibility: boolean;
  ordermodalVisibility: boolean;
  trackmodalVisibility: boolean;
}
const initialState: InitialStateType = {
  modalAuthVisibility: false,
  ordermodalVisibility: false,
  trackmodalVisibility: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthVisibility(state) {
      state.modalAuthVisibility = !state.modalAuthVisibility;
    },
    setOrderModalVisibility(state) {
      state.ordermodalVisibility = !state.ordermodalVisibility;
    },
    setTrackmodalVisibility(state) {
      state.trackmodalVisibility = !state.trackmodalVisibility;
    },
  },
});
export const {
  setModalAuthVisibility,
  setOrderModalVisibility,
  setTrackmodalVisibility,
} = modalSlice.actions;
export default modalSlice.reducer;
