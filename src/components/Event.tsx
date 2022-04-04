import EventInfo from "./EventInfo";
import MarketInfo from "./MarketInfo";
import { getMarket, getOutcome } from "../Handlers/webSocketHandlers";
import { useState } from "react";

const Event = ({
  socket,
  event,
  market,
}: {
  socket: WebSocket;
  event: LiveEventData;
  market: MarketData;
}): JSX.Element => {
  const [loadOutcomes, setLoadOutcomes] = useState(true);

  const onShowMarket = (): void => {
    event.markets.forEach((market) => {
      socket.send(getMarket(market));
    });
  };

  if (loadOutcomes && market && market.outcomes.length !== 0) {
    setLoadOutcomes(false);
    market.outcomes.forEach((outcomeId: number): void => {
      socket.send(getOutcome(outcomeId));
    });
  }

  return (
    <li key={event.eventId}>
      <EventInfo event={event} />
      <button onClick={onShowMarket}>Show Markets</button>
      {market && <MarketInfo market={market} />}
    </li>
  );
};

export default Event;
