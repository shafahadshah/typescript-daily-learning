type AppConfig = {
  appName: string;
  port: number;
  debug: boolean;
};

const config: AppConfig = {
  appName: "My App",
  port: 3000,
  debug: true,
};

console.log(config);