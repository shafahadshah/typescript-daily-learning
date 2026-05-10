type LoginForm = {
  email?: string;
  password?: string;
};

type ValidLogin = Required<LoginForm>;

const form: ValidLogin = {
  email: "test@gmail.com",
  password: "123456",
};

console.log(form);