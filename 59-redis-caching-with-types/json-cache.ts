import { createClient }
from "redis";

type User = {
  id: number;
  name: string;
};

const redisClient =
  createClient();

await redisClient.connect();

const user: User = {
  id: 1,
  name: "Ali",
};

await redisClient.set(
  "user",
  JSON.stringify(user)
);

const result =
  await redisClient.get(
    "user"
  );

const cachedUser: User =
  JSON.parse(
    result || "{}"
  );

console.log(
  cachedUser
);