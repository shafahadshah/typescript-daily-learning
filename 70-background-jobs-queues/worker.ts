import { Worker }
from "bullmq";

new Worker(
  "emailQueue",

  async (job) => {

    console.log(
      "Processing:",
      job.data.email
    );

  },

  {
    connection: {
      host:
        "localhost",
      port: 6379,
    },
  }
);