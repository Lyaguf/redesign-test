import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { HashRouter, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./app/routes/Routes";

const router = createHashRouter(routes)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      {/* <App />
    </RouterProvider> */}
  </React.StrictMode>
);
