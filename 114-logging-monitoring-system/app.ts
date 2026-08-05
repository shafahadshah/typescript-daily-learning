type Log = {
  level: string;
  message: string;
};

const appLog: Log = {
  level: "info",
  message: "Application initialized",
};

console.log(appLog);