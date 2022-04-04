import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";
import initialState from "../../storeProvider/initialState";
import EventsList from "../EventsList";
import { marketData, eventData, outcomeData } from "../../mocks/mockData";

describe("test EventsList", () => {
  const url = "ws://localhost:1234";
  const server = new WS(url);
  const socket = new WebSocket(url);

  it("should render events list", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    screen.getByText("Shanghai Shenhua vs Shandong Luneng Taishan");

    const showMarketsBtn = screen.getByRole("button", { name: /Show Market/i });
    expect(showMarketsBtn).toBeEnabled();
  });

  it("should have SHOW MARKETS buttons enabled", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    const showMarketsBtn = screen.getByRole("button", { name: /Show Market/i });
    expect(showMarketsBtn).toBeEnabled();
  });

  it("should send markets request when SHOW MARKETS button clicked", async () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    const showMarketsBtn = screen.getByRole("button", { name: /Show Market/i });
    userEvent.click(showMarketsBtn);

    await expect(server).toReceiveMessage(
      JSON.stringify({ type: "getMarket", id: 93649849 })
    );
  });

  it("should show market type", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
      markets: {
        [marketData.marketId]: marketData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    screen.getByText(/BOTH SCORE NO DRAW/i);
  });

  it("should disabled SHOW MARKETS button when one of the markets in the state matches with events in the state", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
      markets: {
        [marketData.marketId]: marketData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    const showMarketsBtn = screen.getByRole("button", { name: /Show Market/i });
    expect(showMarketsBtn).toBeDisabled();
  });

  it("should send outcomes request related to the market", async () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
      markets: {
        [marketData.marketId]: marketData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    await expect(server).toReceiveMessage(
      JSON.stringify({ type: "getOutcome", id: 367530493 })
    );
  });

  it("should show outcomes info and odds", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
      markets: {
        [marketData.marketId]: marketData,
      },
      outcomes: {
        [outcomeData.outcomeId]: outcomeData,
      },
    };
    render(<EventsList socket={socket} state={initState} />);

    const outcome = screen.getByText(/Yes/i);
    const outcomeOdds = screen.getByText(/10.00/i);
    expect(outcome).toBeInTheDocument();
    expect(outcomeOdds).toBeInTheDocument();
  });

  it("should show outcomes as fractions", () => {
    const initState = {
      ...initialState,
      events: {
        [eventData.eventId]: eventData,
      },
      markets: {
        [marketData.marketId]: marketData,
      },
      outcomes: {
        [outcomeData.outcomeId]: outcomeData,
      },
      oddsTypeDecimal: false,
    };
    render(<EventsList socket={socket} state={initState} />);

    const outcome = screen.getByText(/Yes/i);
    const outcomeOdds = screen.getByText(/9\/1/i);
    expect(outcome).toBeInTheDocument();
    expect(outcomeOdds).toBeInTheDocument();
  });
});
