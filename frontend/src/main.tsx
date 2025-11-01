import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "@/Login/Login.tsx";


import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Login></Login>
        <Toaster />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
