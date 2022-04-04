import { useContext, useEffect } from "react";
import { WebSocketContext } from "./webSocketProvider";
import { StoreContext } from "./storeProvider";
import * as consts from "./constance/constance";
import { onMessage } from "./Handlers/webSocketHandlers";
import EventsList from "./components/EventsList";
import { setOdds } from "./actions/actions";

function App() {
  const socket = useContext(WebSocketContext);
  const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
    return () => {
      socket?.close();
    };
  }, [socket]);

  if (socket) {
    socket.onmessage = onMessage({ state, dispatch });
    socket.onopen = () => {
      socket.send(
        JSON.stringify({ type: consts.GET_LIVE_EVENT, primaryMarkets: true })
      );
    };
  }

  const onOddsToggle = (): void => {
    dispatch(setOdds(!state.oddsTypeDecimal));
  };

  return (
    <div className="App">
      <h1>Football games</h1>
      <button onClick={onOddsToggle}>Show odds as</button>
      {socket && Object.keys(state?.events).length !== 0 && (
        <EventsList state={state} socket={socket} />
      )}
    </div>
  );
}

export default App;
