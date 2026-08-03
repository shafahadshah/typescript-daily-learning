type ChatUser = {
  name: string;
};

type ChatMessage = {
  user: ChatUser;
  message: string;
};

const chat:
  ChatMessage = {
    user: {
      name: "Ali",
    },
    message: "Welcome!",
};

console.log(chat);