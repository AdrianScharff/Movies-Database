import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/RoutesIndex";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
