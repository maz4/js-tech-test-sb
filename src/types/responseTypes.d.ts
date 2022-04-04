interface Competitor {
  name: string;
  position: string;
}

interface Scores {
  home: number;
  away: number;
}

interface Status {
  active?: boolean;
  cashoutable?: boolean;
  displayable?: boolean;
  finished?: boolean;
  live?: boolean;
  noExtraTime?: boolean;
  requestabet?: boolean;
  resulted?: boolean;
  started?: boolean;
  suspended?: boolean;
  result?: string;
}

interface Liabilities {
  livePriceLimit: number;
}

interface Result {
  place: number;
  result: string;
  favourite: boolean;
}

interface Price {
  den: string;
  num: string;
  decimal: string;
}

interface Outcome {
  outcomeId: number;
  marketId: number;
  eventId: number;
  name: string;
  displayOrder: number;
  result: Result;
  linkedOutcomeId: number;
  price: Price;
  status: Status;
  type: string;
}

interface LiveEventData {
  boostCount: number;
  classId: number;
  className: string;
  competitors: Competitor[];
  displayOrder: number;
  eventId: number;
  linkedEventId: number;
  linkedEventTypeId: number;
  linkedEventTypeName: string;
  markets: number[];
  name: string;
  scores: Scores;
  sort: string;
  startTime: string;
  status: Status;
  superBoostCount: number;
  typeId: number;
  typeName: string;
}

interface MarketData {
  marketId: number;
  eventId: number;
  name: string;
  displayOrder: number;
  type: string;
  status: Status;
  liabilities: Liabilities;
  spAvail: boolean;
  outcomes: number[];
}

interface OutcomeData {
  outcome: Outcome;
}

interface LiveEventDataResult {
  data: LiveEventData[];
  type: string;
}

interface MarketDataResult {
  data: MarketData[];
  type: string;
}

interface OutcomeDataResult {
  data: OutcomeData;
  type: string;
}
