import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RatesContextProvider from "./contexts/RatesContextProvider";
import App from "./App";
import SearchContextProvider from "./contexts/SearchContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <RatesContextProvider>
        <App />
      </RatesContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);
