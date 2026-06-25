type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  address: Address;
};

const user: User = {
  name: "Ali",

  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

console.log(user);