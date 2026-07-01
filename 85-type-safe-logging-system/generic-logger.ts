type Logger<T> = {
  log(
    message: T
  ): void;
};

const logger:
  Logger<string> = {
    log(message) {
      console.log(message);
    },
};

logger.log(
  "Hello TypeScript"
);