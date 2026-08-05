type Log = {
  level: string;
  message: string;
};

class Logger {

  write(
    log: Log
  ): void {

    console.log(
      `[${log.level}] ${log.message}`
    );
  }
}

const logger =
  new Logger();

logger.write({
  level: "info",
  message: "Server running",
});