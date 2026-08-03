type ChatMessage = {
  id: number;
  user: string;
  message: string;
};

const message:
  ChatMessage = {
    id: 1,
    user: "Ali",
    message: "Hello!",
};

console.log(message);