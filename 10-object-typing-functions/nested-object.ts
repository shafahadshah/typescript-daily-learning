// Nested object typing

type Address = {
  city: string;
};

type User = {
  name: string;
  address: Address;
};

function printAddress(user: User) {
  console.log(user.address.city);
}

printAddress({
  name: "Ali",
  address: { city: "Lahore" }
});