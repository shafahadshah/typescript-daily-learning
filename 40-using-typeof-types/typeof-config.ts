const appConfig = {
  apiUrl: "/api",
  timeout: 5000,
  darkMode: true,
};

type AppConfig =
  typeof appConfig;

const config: AppConfig = {
  apiUrl: "/v2/api",
  timeout: 3000,
  darkMode: false,
};

console.log(config);