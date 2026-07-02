type UserDto = {
  id: number;
  name: string;
  email: string;
};

type UpdateUserDto =
  Partial<UserDto>;

const update:
  UpdateUserDto = {
    email: "new@test.com",
  };

console.log(update);