import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RatesContextProvider from "./contexts/RatesContextProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RatesContextProvider>
      <App />
    </RatesContextProvider>
  </React.StrictMode>
);
