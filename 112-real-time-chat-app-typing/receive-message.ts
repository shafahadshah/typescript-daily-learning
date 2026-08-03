type ChatMessage = {
  id: number;
  user: string;
  message: string;
};

function receiveMessage(
  message: ChatMessage
): void {

  console.log(
    `Received: ${message.message}`
  );
}

receiveMessage({
  id: 2,
  user: "Sara",
  message: "Welcome!",
});