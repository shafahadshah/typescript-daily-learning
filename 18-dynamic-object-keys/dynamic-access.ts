// Accessing dynamic keys

type Data = {
  [key: string]: string;
};

const data: Data = {
  name: "Ali",
  city: "Karachi"
};

const key = "name";

console.log(data[key]);