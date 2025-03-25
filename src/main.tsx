import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProviderConfig from "./tools/provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./roots";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConfig>
      <RouterProvider router={router} />
    </ProviderConfig>
  </StrictMode>
);
