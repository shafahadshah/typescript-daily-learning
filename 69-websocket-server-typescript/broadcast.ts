import {
  WebSocketServer,
} from "ws";

export function broadcast(
  wss: WebSocketServer,
  message: string
) {
  wss.clients.forEach(
    (client) => {
      client.send(
        message
      );
    }
  );
}