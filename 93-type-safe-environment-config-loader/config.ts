type Config = {
  host: string;
  port: number;
};

function loadConfig(): Config {
  return {
    host: "localhost",
    port: 3000,
  };
}

console.log(
  loadConfig()
);