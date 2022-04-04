const OutcomesInfo = ({ outcomes }: { outcomes: Outcome[] }): JSX.Element => {
  return (
    <div>
      <p>Outcomes:</p>
      <ul>
        {outcomes.map((outcome): JSX.Element => {
          return (
            <li>
              {`${outcome.name} - `}
              {<span>{parseFloat(outcome.price.decimal).toFixed(2)}, </span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OutcomesInfo;
