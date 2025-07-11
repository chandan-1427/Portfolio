import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
