type ChatMessage = {
  id: number;
  user: string;
  message: string;
};

class ChatService {

  send(
    message: ChatMessage
  ): void {

    console.log(
      message
    );
  }
}

const chat =
  new ChatService();

chat.send({
  id: 1,
  user: "Ali",
  message: "Hello",
});