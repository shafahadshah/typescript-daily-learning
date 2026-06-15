import {
  WebSocket,
} from "ws";

export function sendWelcome(
  socket: WebSocket
) {
  socket.send(
    "Welcome User"
  );
}