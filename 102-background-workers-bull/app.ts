import Queue
from "bull";

const emailQueue =
  new Queue(
    "email"
  );

emailQueue.add({
  email:
    "user@test.com",
});

console.log(
  "Job added"
);