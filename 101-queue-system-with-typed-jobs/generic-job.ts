type QueueJob<T> = {
  id: number;
  payload: T;
};

const job:
  QueueJob<string> = {
    id: 1,
    payload: "Hello",
};

console.log(job);