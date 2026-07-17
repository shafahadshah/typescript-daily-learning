class CacheRepository {

  save(
    key: string,
    value: string
  ) {

    console.log(
      `Cached ${key}`
    );
  }
}

const repository =
  new CacheRepository();

repository.save(
  "user:1",
  "Ali"
);