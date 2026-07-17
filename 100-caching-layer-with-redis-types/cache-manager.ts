class CacheManager {

  clear(): void {

    console.log(
      "Cache cleared"
    );
  }
}

const manager =
  new CacheManager();

manager.clear();