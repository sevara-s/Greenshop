import { FC } from "react";
import { ComponentTypes } from "../../@types";
import Modals from "../../components/modals";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ProviderConfig: FC<ComponentTypes> = ({ children }) => {
  console.log(Modals, store, QueryClientProvider, );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Modals />
        {children}
      </Provider>
    </QueryClientProvider>
  );
};

export default ProviderConfig;
