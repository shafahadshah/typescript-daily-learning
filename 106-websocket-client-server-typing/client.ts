import WebSocket
from "ws";

type Message = {
  text: string;
};

const socket =
  new WebSocket(
    "ws://localhost:8080"
  );

socket.on(
  "open",
  () => {

    const message:
      Message = {
      text: "Hello",
    };

    socket.send(
      JSON.stringify(
        message
      )
    );
  }
);