import { createClient }
from "redis";

const redisClient =
  createClient();

await redisClient.connect();

const username =
  await redisClient.get(
    "username"
  );

console.log(username);