import { createContext} from "react";
const WebSocketContext = createContext<WebSocket| null>(null);

const WebSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const URL ="ws://localhost:8889";
  let socket: WebSocket = new WebSocket(URL);

  if (!socket) {
    socket = new WebSocket(URL);
  }

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  )
};

export { WebSocketContext, WebSocketProvider };
