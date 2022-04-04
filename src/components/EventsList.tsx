import Event from "./Event";

const EventsList = ({
  socket,
  state,
}: {
  socket: WebSocket;
  state: {
    events: Record<number, LiveEventData>;
    markets: Record<number, MarketData>;
  };
}): JSX.Element => {
  const { events, markets } = state;
  return (
    <ul>
      {Object.values(events).map((event: LiveEventData): JSX.Element => {
        return (
          <Event
            socket={socket}
            event={event}
            market={markets[event?.markets[0]]}
            key={event.eventId}
          />
        );
      })}
    </ul>
  );
};

export default EventsList;
