import { liveEventData, marketData, outcomeData } from "../actions/actions";
import * as consts from "../constance/constance";

export const onMessage =
  ({ state, dispatch }: { state: any; dispatch: React.Dispatch<any> }): any =>
  (event: MessageEvent): void => {
    const responseData = JSON.parse(event.data);

    if (responseData.type === consts.LIVE_EVENTS_DATA) {
      let normalizedData!: Record<number, LiveEventData>;

      responseData.data.forEach((event: LiveEventData): void => {
        normalizedData = {
          ...normalizedData,
          [event.eventId]: event,
        };
      });

      dispatch(liveEventData(normalizedData));
    }

    if (responseData.type === consts.MARKET_DATA) {
      const normalizedData: Record<number, MarketData> = {
        [responseData.data.marketId]: responseData.data,
      };

      dispatch(marketData(normalizedData));
    }

    if (responseData.type === consts.OUTCOME_DATA) {
      const normalizedData: Record<number, Outcome> = {
        [responseData.data.outcomeId]: responseData.data,
      };

      dispatch(outcomeData(normalizedData));
    }
  };

export const getMarket = (id: number): string => {
  return JSON.stringify({ type: consts.GET_MARKET, id });
};

export const getOutcome = (id: number): string => {
  return JSON.stringify({ type: consts.GET_OUTCOME, id });
};
