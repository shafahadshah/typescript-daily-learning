type LogLevel =
  | "info"
  | "warn"
  | "error";

function log(
  level: LogLevel,
  message: string
) {
  console.log(
    `[${level}] ${message}`
  );
}

log(
  "info",
  "Application started"
);