import { FC } from "react";
import { ComponentType } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ProviderConfig: FC<ComponentType> = ({ children }) => {
  const queryClient=new QueryClient()
  return (
    <div>

      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Modals />
        {children}
      </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default ProviderConfig;
