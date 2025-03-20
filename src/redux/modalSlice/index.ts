import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisibility: boolean;
}

const initialState:InitialStateType = {
  modalAuthorizationVisibility: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationModalVisibility(state) {
      state.modalAuthorizationVisibility = !state.modalAuthorizationVisibility;
    },
  },
});

export const { setModalAuthorizationModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
