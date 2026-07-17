class CacheService {

  set(
    key: string,
    value: string
  ): void {

    console.log(
      `Saved ${key}`
    );
  }
}

const cache =
  new CacheService();

cache.set(
  "user:1",
  "Ali"
);