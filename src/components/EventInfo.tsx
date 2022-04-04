const EventInfo = ({ event }: { event: LiveEventData }): JSX.Element => {
  return (
    <p>{`${event.competitors[0].name} vs ${event.competitors[1].name}`}</p>
  );
};

export default EventInfo;
