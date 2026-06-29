type User = {
  name: string;
  age: number;
};

type Validator<T> = (
  value: T
) => boolean;

const validateUser:
  Validator<User> =
  (user) => {
    return (
      user.name !== "" &&
      user.age >= 18
    );
  };

console.log(
  validateUser({
    name: "Ali",
    age: 20,
  })
);