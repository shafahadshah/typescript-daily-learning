// Dynamic API-like object

type ApiResponse = {
  [key: string]: string | number;
};

const response: ApiResponse = {
  id: 1,
  name: "Ali",
  status: "active"
};

for (const key in response) {
  console.log(key, response[key]);
}