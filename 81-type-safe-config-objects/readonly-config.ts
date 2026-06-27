type Config = {
  readonly appName: string;
  readonly version: string;
};

const config: Config = {
  appName: "My App",
  version: "1.0.0",
};

console.log(config);