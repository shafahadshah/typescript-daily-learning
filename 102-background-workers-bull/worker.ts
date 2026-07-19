import Queue from "bull";

const emailQueue =
  new Queue(
    "email"
  );

console.log(
  "Worker created"
);