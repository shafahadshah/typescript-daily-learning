type ApiConfig = {
  baseUrl: string;
  timeout: number;
  retries: number;
};

const apiConfig: ApiConfig = {
  baseUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};

console.log(apiConfig);