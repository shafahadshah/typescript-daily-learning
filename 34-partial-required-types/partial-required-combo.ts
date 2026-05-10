type User = {
  id: number;
  name: string;
  email: string;
};

type UpdateUser = Partial<User>;

type CreateUser = Required<User>;

const updateData: UpdateUser = {
  name: "Updated Ali",
};

const createData: CreateUser = {
  id: 1,
  name: "Ali",
  email: "ali@test.com",
};

console.log(updateData);
console.log(createData);