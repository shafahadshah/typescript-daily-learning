import cron
from "node-cron";

cron.schedule(
  "*/5 * * * *",
  () => {
    console.log(
      "Sending emails"
    );
  }
);