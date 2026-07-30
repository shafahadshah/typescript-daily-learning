type EmailResponse = {
  success: boolean;
  messageId: string;
};

const response:
  EmailResponse = {
    success: true,
    messageId: "MSG123",
};

console.log(response);