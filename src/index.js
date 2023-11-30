import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import React from "react";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
