type User = {
  name: string;

  address: {
    city: string;
    country: string;
  };
};

const user: User = {
  name: "Ali",

  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

console.log(user);