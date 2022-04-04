const Event = ({ event }: { event: LiveEventData }): JSX.Element => {
  return (
    <li key={event.eventId}>
      <p>{`${event.competitors[0].name} vs ${event.competitors[1].name}`}</p>
    </li>
  );
};

export default Event;
