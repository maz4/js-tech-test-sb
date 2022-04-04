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
    default:
      return state;
  }
};

export default reducer;
