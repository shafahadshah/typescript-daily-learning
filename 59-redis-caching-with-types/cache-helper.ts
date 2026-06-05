import { createClient }
from "redis";

const redisClient =
  createClient();

await redisClient.connect();

async function setCache<T>(
  key: string,
  value: T
) {
  await redisClient.set(
    key,
    JSON.stringify(value)
  );
}

async function getCache<T>(
  key: string
): Promise<T | null> {

  const data =
    await redisClient.get(
      key
    );

  if (!data) {
    return null;
  }

  return JSON.parse(data);
}