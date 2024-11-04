import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import SidebarContext from "./Context/SidebarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarContext>
  </StrictMode>
);
