import React, {useContext, useEffect} from "react";
import {WebSocketContext} from './webSocketProvider/webSocketProvider'

function App() {
  const socket = useContext(WebSocketContext)

  useEffect(() => {
    return () =>{
      socket?.close()
    }
  })

  return <div className="App">
    <h1>Tech Challenge</h1>
  </div>;
}

export default App;
