import { createClient }
from "redis";

const redisClient =
  createClient();

redisClient.on(
  "error",
  (error) => {
    console.log(error);
  }
);

await redisClient.connect();

console.log(
  "Redis connected"
);