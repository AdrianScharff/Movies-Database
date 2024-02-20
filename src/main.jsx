import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RatesContextProvider from "./contexts/RatesContextProvider";
import App from "./App";
import PopularityContextProvider from "./contexts/PopularityContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopularityContextProvider>
      <RatesContextProvider>
        <App />
      </RatesContextProvider>
    </PopularityContextProvider>
  </React.StrictMode>
);
