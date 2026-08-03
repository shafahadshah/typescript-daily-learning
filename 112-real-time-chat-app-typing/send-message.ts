type ChatMessage = {
  id: number;
  user: string;
  message: string;
};

function sendMessage(
  message: ChatMessage
): void {

  console.log(
    `${message.user}: ${message.message}`
  );
}

sendMessage({
  id: 1,
  user: "Ali",
  message: "Hi everyone!",
});