import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ProviderConfig from "./tools/provider";

import { router } from "./router";

import '@ant-design/v5-patch-for-react-19';

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConfig>
      <RouterProvider router={router} />
    </ProviderConfig>
  </StrictMode>
);
