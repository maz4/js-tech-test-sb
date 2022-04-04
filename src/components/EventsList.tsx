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
        return (
          <li key={event.eventId}>
            <p>{`${event.competitors[0].name} vs ${event.competitors[1].name}`}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default EventsList;
