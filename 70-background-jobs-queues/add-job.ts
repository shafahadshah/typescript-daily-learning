import {
  emailQueue,
} from "./job-queue";

async function addJob() {

  await emailQueue.add(
    "sendEmail",
    {
      email:
        "user@test.com",
    }
  );

  console.log(
    "Job added"
  );
}

addJob();