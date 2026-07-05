interface ILogger {
  log(
    message: string
  ): void;
}

class ConsoleLogger
  implements ILogger {

  log(
    message: string
  ) {
    console.log(
      message
    );
  }
}

const logger:
  ILogger =
  new ConsoleLogger();

logger.log(
  "Application started"
);