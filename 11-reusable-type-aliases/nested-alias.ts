// Nested reusable aliases

type Address = {
  city: string;
};

type User = {
  name: string;
  address: Address;
};

function getCity(user: User) {
  console.log(user.address.city);
}

getCity({
  name: "Ali",
  address: { city: "Karachi" }
});