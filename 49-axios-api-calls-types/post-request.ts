import axios from "axios";

type NewUser = {
  name: string;
};

async function createUser(
  user: NewUser
) {
  const response =
    await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );

  console.log(
    response.data
  );
}

createUser({
  name: "Ali",
});