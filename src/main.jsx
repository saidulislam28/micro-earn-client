import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
     
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
  </AuthProvider>
);