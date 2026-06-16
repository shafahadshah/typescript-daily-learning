import {
  emailQueue,
} from "./job-queue";

async function schedule() {

  await emailQueue.add(
    "sendLater",

    {
      email:
        "user@test.com",
    },

    {
      delay:
        5000,
    }
  );

  console.log(
    "Scheduled"
  );
}

schedule();