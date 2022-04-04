import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { WebSocketProvider } from "./webSocketProvider";
import { StoreProvider } from "./storeProvider";

ReactDOM.render(
  <React.StrictMode>
    <WebSocketProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </WebSocketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
