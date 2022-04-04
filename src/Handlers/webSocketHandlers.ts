import { liveEventData } from "../actions/actions";
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
  };
