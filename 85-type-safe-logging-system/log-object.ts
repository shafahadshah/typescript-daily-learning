type LogEntry = {
  level:
    | "info"
    | "warn"
    | "error";
  message: string;
};

const log: LogEntry = {
  level: "warn",
  message: "Low disk space",
};

console.log(log);