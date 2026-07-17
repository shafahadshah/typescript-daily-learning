interface RedisClient {

  set(
    key: string,
    value: string
  ): void;

  get(
    key: string
  ): string | null;
}

const redis:
  RedisClient = {

  set(
    key,
    value
  ) {
    console.log(
      key,
      value
    );
  },

  get(
    key
  ) {
    return null;
  },
};

redis.set(
  "user:1",
  "Ali"
);