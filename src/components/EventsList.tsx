import Event from "./Event";
import "./EventsList.css";

const EventsList = ({
  socket,
  state,
}: {
  socket: WebSocket;
  state: {
    events: Record<number, LiveEventData>;
    markets: Record<number, MarketData>;
    outcomes: Record<number, Outcome>;
    oddsTypeDecimal: boolean;
  };
}): JSX.Element => {
  const { events, markets, outcomes, oddsTypeDecimal } = state;
  return (
    <ul className="events-list">
      {Object.values(events).map((event: LiveEventData): JSX.Element => {
        return (
          <Event
            socket={socket}
            event={event}
            market={markets[event?.markets[0]]}
            outcomes={outcomes}
            oddsTypeDecimal={oddsTypeDecimal}
            key={event.eventId}
          />
        );
      })}
    </ul>
  );
};

export default EventsList;
