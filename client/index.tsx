import { React, react, ReactDOM } from "./deps.ts";
import App from "./App.jsx";

ReactDOM.createRoot(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
);
