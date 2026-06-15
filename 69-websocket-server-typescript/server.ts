import {
  WebSocketServer,
} from "ws";

const wss =
  new WebSocketServer({
    port: 8080,
  });

wss.on(
  "connection",
  () => {
    console.log(
      "Client connected"
    );
  }
);

console.log(
  "WebSocket running"
);