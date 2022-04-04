const MarketInfo = ({ market }: { market: MarketData }): JSX.Element => {
  return (
    <p>
      Market: <b>{market.name.toUpperCase()}</b>
    </p>
  );
};

export default MarketInfo;
