import EventInfo from "./EventInfo";
import MarketInfo from "./MarketInfo";
import OutcomesInfo from "./OutcomesInfo";
import { getMarket, getOutcome } from "../Handlers/webSocketHandlers";
import { useState } from "react";
import "./Event.css";

const Event = ({
  socket,
  event,
  market,
  outcomes,
  oddsTypeDecimal,
}: {
  socket: WebSocket;
  event: LiveEventData;
  market: MarketData;
  outcomes: Record<number, Outcome>;
  oddsTypeDecimal: boolean;
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
    <li className="event" key={event.eventId}>
      <EventInfo event={event} />
      <button
        onClick={onShowMarket}
        disabled={event.markets.some((id) => id === market?.marketId)}
      >
        Show Markets
      </button>
      {market && <MarketInfo market={market} />}
      {market && Object.values(outcomes).length !== 0 && (
        <OutcomesInfo
          outcomes={Object.values(outcomes).filter(
            (outcome) => outcome.marketId === market.marketId
          )}
          oddsTypeDecimal={oddsTypeDecimal}
        />
      )}
    </li>
  );
};

export default Event;
