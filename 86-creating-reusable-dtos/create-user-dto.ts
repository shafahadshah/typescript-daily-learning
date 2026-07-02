type CreateUserDto = {
  name: string;
  email: string;
};

const newUser:
  CreateUserDto = {
    name: "Sara",
    email: "sara@test.com",
  };

console.log(newUser);