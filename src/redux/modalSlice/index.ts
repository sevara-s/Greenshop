import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisibility: boolean;
  orderModalVisibilty: boolean;
  trackModalVisiblty: boolean;
}

const initialState:InitialStateType = {
  modalAuthorizationVisibility: false,
  orderModalVisibilty: false,
  trackModalVisiblty: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationModalVisibility(state) {
      state.modalAuthorizationVisibility = !state.modalAuthorizationVisibility;
    },
    setOrderModalVisibilty(state) {
      state.orderModalVisibilty = !state.orderModalVisibilty;
    },
    setTrackModalVisiblty(state) {
      state.trackModalVisiblty = !state.trackModalVisiblty;
    },
  },
});

export const { setModalAuthorizationModalVisibility,setOrderModalVisibilty,setTrackModalVisiblty } = modalSlice.actions;
export default modalSlice.reducer;
