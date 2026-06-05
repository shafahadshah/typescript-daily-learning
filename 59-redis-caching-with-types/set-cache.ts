import { createClient }
from "redis";

const redisClient =
  createClient();

await redisClient.connect();

await redisClient.set(
  "username",
  "Ali"
);

console.log(
  "Value stored"
);