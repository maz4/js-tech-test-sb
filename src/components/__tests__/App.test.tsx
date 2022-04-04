import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";
import App from "../App";
import { WebSocketProvider } from "../../webSocketProvider";
import { StoreProvider } from "../../storeProvider";

describe("test App", () => {
  const url = "ws://localhost:8889";
  const server = new WS(url);

  it("should render page title", () => {
    render(
      <WebSocketProvider>
        <App />
      </WebSocketProvider>
    );
    screen.getByText("Football games");
  });

  it("should toggle type on button click", async () => {
    render(
      <WebSocketProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </WebSocketProvider>
    );
    const button = screen.getByRole("button", {
      name: /show odds as fractions/i,
    });

    userEvent.click(button);

    await screen.findByRole("button", { name: /show odds as decimal/i });
  });

  it("should send get live events request on render", async () => {
    render(
      <WebSocketProvider>
        <App />
      </WebSocketProvider>
    );

    await expect(server).toReceiveMessage(
      JSON.stringify({ type: "getLiveEvents", primaryMarkets: true })
    );
  });
});
