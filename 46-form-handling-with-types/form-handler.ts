type RegisterForm = {
  username: string;
  age: number;
};

function submitForm(
  data: RegisterForm
) {
  console.log(data);
}

submitForm({
  username: "Ali",
  age: 25,
});