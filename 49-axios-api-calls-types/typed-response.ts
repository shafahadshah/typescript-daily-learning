import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers() {
  const response =
    await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

  console.log(
    response.data
  );
}

getUsers();