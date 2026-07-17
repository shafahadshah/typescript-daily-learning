class CacheService {

  set(
    key: string,
    value: string
  ) {

    console.log(
      `Saving ${key}`
    );
  }
}

const cache =
  new CacheService();

cache.set(
  "session:1",
  "active"
);