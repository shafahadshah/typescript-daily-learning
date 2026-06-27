type Environment =
  | "development"
  | "production"
  | "test";

type EnvConfig = {
  env: Environment;
};

const config: EnvConfig = {
  env: "development",
};

console.log(config);