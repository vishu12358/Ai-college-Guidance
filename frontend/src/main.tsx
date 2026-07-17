import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CompareProvider } from "./context/CompareContext";
import { SavedCollegesProvider } from "./context/SavedCollegesContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SavedCollegesProvider>
      <CompareProvider>
        <App />
      </CompareProvider>
    </SavedCollegesProvider>
  </React.StrictMode>
);