import "./OutcomesInfo.css";

const OutcomesInfo = ({
  outcomes,
  oddsTypeDecimal,
}: {
  outcomes: Outcome[];
  oddsTypeDecimal: boolean;
}): JSX.Element => {
  return (
    <div>
      <p>Outcomes:</p>
      <ul className="outcomes-list">
        {outcomes.map((outcome): JSX.Element => {
          return (
            <li className="outcome-list__element" key={outcome.name}>
              {`${outcome.name} - `}
              {oddsTypeDecimal ? (
                <span>{parseFloat(outcome.price.decimal).toFixed(2)} </span>
              ) : (
                <span>{`${outcome.price.num}/${outcome.price.den}`} </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OutcomesInfo;
