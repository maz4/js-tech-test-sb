import * as consts from "../constance/constance";

export const liveEventData = (
  payload: Record<number, LiveEventData>
): { type: string; payload: Record<number, LiveEventData> } => {
  return {
    type: consts.LIVE_EVENTS_DATA,
    payload,
  };
};
