type WeatherResponse = {
  city: string;
  temperature: number;
};

const response:
  WeatherResponse = {
    city: "London",
    temperature: 22,
};

console.log(
  response
);