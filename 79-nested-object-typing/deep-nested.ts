type Company = {
  name: string;

  location: {
    country: {
      name: string;
      code: string;
    };
  };
};

const company: Company = {
  name: "Tech Corp",

  location: {
    country: {
      name: "Pakistan",
      code: "PK",
    },
  },
};

console.log(company);