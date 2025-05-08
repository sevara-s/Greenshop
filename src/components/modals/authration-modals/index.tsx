import { Modal } from "antd";
import { useState } from "react";

import Login from "./login";
import Register from "./register";

import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setModalAuthVisibility } from "../../../redux/modalSlice";

const AuthrationModal = () => {
  const { modalAuthVisibility } = useReduxSelector(state => state.modalSlice);
  const [active, setActive] = useState(false); // Login default turishi uchun false

  const dispatch = useReduxDispatch();
  
  return (
    <Modal 
      open={modalAuthVisibility} 
      onCancel={() => dispatch(setModalAuthVisibility())} 
      footer={false}
    >
      <div>
        {/* Login & Register Toggles */}
        <div className="flex items-center justify-center gap-7 mt-7">
          <h3 
            onClick={() => setActive(false)} 
            className={`text-[20px] font-medium cursor-pointer ${!active ? "text-primary" : "text-black"}`}
          >
            Login
          </h3>
          <div className="w-[1px] h-[20px] bg-black"></div>
          <h3  
            onClick={() => setActive(true)} 
            className={`text-[20px] font-medium cursor-pointer ${active ? "text-primary" : "text-black"}`}
          >
            Register
          </h3>
        </div>

        {/* Content */}
        {!active ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthrationModal;
