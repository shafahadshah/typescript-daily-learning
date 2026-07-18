type QueueJob<T> = {
  id: number;
  payload: T;
};

class Queue<T> {

  process(
    job: QueueJob<T>
  ) {

    console.log(
      `Processing:`,
      job.payload
    );
  }
}

const queue =
  new Queue<string>();

queue.process({
  id: 1,
  payload: "Generate Report",
});