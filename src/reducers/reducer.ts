import * as consts from "../constance/constance";
const reducer = (state: any, action: any): void => {
  switch (action.type) {
    case consts.LIVE_EVENTS_DATA:
      return {
        ...state,
        events: action.payload,
      };
    case consts.MARKET_DATA:
      return {
        ...state,
        markets: { ...state.markets, ...action.payload },
      };
    case consts.OUTCOME_DATA:
      return {
        ...state,
        outcomes: { ...state.outcomes, ...action.payload },
      };
    case consts.SET_ODDS:
      return {
        ...state,
        oddsTypeDecimal: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
