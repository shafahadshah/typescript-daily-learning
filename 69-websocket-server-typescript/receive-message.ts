import {
  WebSocket,
} from "ws";

export function handleMessage(
  socket: WebSocket
) {
  socket.on(
    "message",
    (message) => {
      console.log(
        message.toString()
      );
    }
  );
}