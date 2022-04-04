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
      <ul>
        {outcomes.map((outcome): JSX.Element => {
          return (
            <li>
              {`${outcome.name} - `}
              {oddsTypeDecimal ? (
                <span>{parseFloat(outcome.price.decimal).toFixed(2)}, </span>
              ) : (
                <span>{`${outcome.price.num}/${outcome.price.den}`}, </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OutcomesInfo;
