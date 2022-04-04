import Event from "./Event";

const EventsList = ({
  socket,
  state,
}: {
  socket: WebSocket;
  state: {
    events: Record<number, LiveEventData>;
    markets: Record<number, MarketData>;
    outcomes: Record<number, Outcome>;
  };
}): JSX.Element => {
  const { events, markets, outcomes } = state;
  return (
    <ul>
      {Object.values(events).map((event: LiveEventData): JSX.Element => {
        return (
          <Event
            socket={socket}
            event={event}
            market={markets[event?.markets[0]]}
            outcomes={outcomes}
            key={event.eventId}
          />
        );
      })}
    </ul>
  );
};

export default EventsList;
