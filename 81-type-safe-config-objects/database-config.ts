type DatabaseConfig = {
  host: string;
  port: number;
  database: string;
};

const dbConfig: DatabaseConfig = {
  host: "localhost",
  port: 5432,
  database: "app_db",
};

console.log(dbConfig);