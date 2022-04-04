import React, { useContext, useEffect } from "react";
import { WebSocketContext } from "./webSocketProvider";
import { StoreContext } from "./storeProvider";

function App() {
  const socket = useContext(WebSocketContext);
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    return () => {
      socket?.close();
    };
  });

  return (
    <div className="App">
      <h1>Tech Challenge</h1>
    </div>
  );
}

export default App;
