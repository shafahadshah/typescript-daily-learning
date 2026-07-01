class Logger {

  info(
    message: string
  ) {
    console.log(
      `[INFO] ${message}`
    );
  }

  error(
    message: string
  ) {
    console.log(
      `[ERROR] ${message}`
    );
  }
}

const logger =
  new Logger();

logger.info(
  "Server started"
);

logger.error(
  "Connection failed"
);