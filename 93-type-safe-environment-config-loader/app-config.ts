export type AppConfig = {
  PORT: number;
  APP_NAME: string;
};

const config: AppConfig = {
  PORT: 3000,
  APP_NAME: "My App",
};

console.log(config);