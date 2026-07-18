type QueueJob<T> = {
  id: number;
  payload: T;
};

class QueueService<T> {

  add(
    job: QueueJob<T>
  ) {
    console.log(job);
  }
}

const queue =
  new QueueService<string>();

queue.add({
  id: 1,
  payload: "Send Email",
}); 