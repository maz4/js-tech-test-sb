import EventInfo from "./EventInfo";
import MarketInfo from "./MarketInfo";
import { getMarket } from "../Handlers/webSocketHandlers";

const Event = ({
  socket,
  event,
  market,
}: {
  socket: WebSocket;
  event: LiveEventData;
  market: MarketData;
}): JSX.Element => {
  const onShowMarket = (): void => {
    event.markets.forEach((market) => {
      socket.send(getMarket(market));
    });
  };

  return (
    <li key={event.eventId}>
      <EventInfo event={event} />
      <button onClick={onShowMarket}>Show Markets</button>
      {market && <MarketInfo market={market} />}
    </li>
  );
};

export default Event;
