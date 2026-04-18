// Nested interfaces

interface Address {
  city: string;
}

interface User {
  name: string;
  address: Address;
}

function getCity(user: User) {
  console.log(user.address.city);
}

getCity({
  name: "John",
  address: { city: "Lahore" }
});