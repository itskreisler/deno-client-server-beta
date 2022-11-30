import { React, react, ReactDOMClient } from "./deps.ts";
import App from "./App.jsx";

/* ReactDOM.createRoot(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  document.getElementById("root")
); */
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
