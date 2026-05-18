type ApiResponse = {
  user: {
    id: number;
    email: string;
  };
};

type UserEmail =
  ApiResponse["user"]["email"];

const email: UserEmail =
  "ali@test.com";

console.log(email);