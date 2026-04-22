// Optional chaining

type User = {
  name: string;
  address?: {
    city: string;
  };
};

function getCity(user: User) {
  console.log(user.address?.city ?? "No city");
}

getCity({ name: "Ali", address: { city: "Karachi" } });
getCity({ name: "Sara" });