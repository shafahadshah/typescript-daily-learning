type Sender<T> = {
  send(
    data: T
  ): void;
};

const sender:
  Sender<string> = {
  send(data) {
    console.log(data);
  },
};

sender.send(
  "Email sent"
);