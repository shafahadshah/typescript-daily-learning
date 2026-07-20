import cron
from "node-cron";

cron.schedule(
  "0 * * * *",
  () => {
    console.log(
      "Cleaning cache"
    );
  }
); 