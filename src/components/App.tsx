import { useContext, useEffect } from "react";
import { WebSocketContext } from "../webSocketProvider";
import { StoreContext } from "../storeProvider";
import * as consts from "../constance/constance";
import { onMessage } from "../Handlers/webSocketHandlers";
import EventsList from "./EventsList";
import { setOdds } from "../actions/actions";
import "./App.css";

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
    <div className="app">
      <button onClick={onOddsToggle}>
        Show odds as {state.oddsTypeDecimal ? "fractions" : "decimal"}
      </button>
      <h1>Football games</h1>
      {socket && Object.keys(state?.events).length !== 0 && (
        <EventsList state={state} socket={socket} />
      )}
    </div>
  );
}

export default App;
