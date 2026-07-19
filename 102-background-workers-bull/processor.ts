import Queue
from "bull";

const emailQueue =
  new Queue(
    "email"
  );

emailQueue.process(
  async job => {

    console.log(
      job.data.email
    );
  }
);