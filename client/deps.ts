export * as ReactDOM from "https://jspm.dev/react-dom";
import * as ReactDOMClient from "https://jspm.dev/react-dom/client";
import * as ReactDOMServer from "https://jspm.dev/react-dom/server";
import * as React from "https://jspm.dev/react";

const { default: _any, ...rest } = React;
const react = React.default;
export { ReactDOMClient, ReactDOMServer };
export { react as React };
export { rest as react };
