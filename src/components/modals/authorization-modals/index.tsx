import { Modal } from "antd";
import Login from "./login";
import Register from "./register";
import { useState } from "react";
import { useReduxSelector, useReduxDispatch } from "../../../hooks/useRedux";
import { setModalAuthorizationModalVisibility } from "../../../redux/modalSlice";

const AuthorizationModal = () => {
  const { modalAuthorizationVisibility } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();
  const [active, setActive] = useState(true);
  return (
    <>
      <Modal
        open={modalAuthorizationVisibility}
        onCancel={() => dispatch(setModalAuthorizationModalVisibility())}
        footer={false}
      >
        <div>
          <div className="flex items-center justify-center gap-7 mt-7">
            <h3
              onClick={() => setActive(true)}
              className={`font-medium text-[20px] cursor-pointer ${
                active && "text-[#46A358]"
              }`}
            >
              Login
            </h3>
            <div className="h-[1.4rem] w-[0.1rem] bg-[#3D3D3D]"></div>
            <h3
              onClick={() => setActive(false)}
              className={`font-medium text-[20px] cursor-pointer ${
                !active && "text-[#46A358]"
              }`}
            >
              Register
            </h3>
          </div>

          {active ? <Login /> : <Register />}
        </div>
      </Modal>
    </>
  );
};

export default AuthorizationModal;
