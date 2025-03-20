import { FC } from "react";
import { ComponentTypes } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const ProviderConfig: FC<ComponentTypes> = ({ children }) => {
  return (
    <>
    <Provider store={store}>
      <Modals />
      {children}
      </Provider>
    </>
  );
};

export default ProviderConfig;
