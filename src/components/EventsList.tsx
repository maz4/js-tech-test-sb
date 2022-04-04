import Event from "./Event";

const EventsList = ({
  state,
}: {
  state: {
    events: Record<number, LiveEventData>;
  };
}): JSX.Element => {
  const { events } = state;
  return (
    <ul>
      {Object.values(events).map((event: LiveEventData): JSX.Element => {
        return <Event event={event} key={event.eventId} />;
      })}
    </ul>
  );
};

export default EventsList;
