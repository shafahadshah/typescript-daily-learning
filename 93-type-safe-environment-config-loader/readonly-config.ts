type Config = {
  readonly PORT: number;
  readonly NODE_ENV: string;
};

const config: Config = {
  PORT: 3000,
  NODE_ENV: "development",
};

console.log(config);