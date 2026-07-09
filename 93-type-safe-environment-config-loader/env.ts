type Env = {
  PORT: number;
  APP_NAME: string;
};

const env: Env = {
  PORT: 3000,
  APP_NAME: "My App",
};

console.log(env);