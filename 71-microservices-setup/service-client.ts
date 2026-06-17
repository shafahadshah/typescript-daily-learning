import axios
from "axios";

async function getUsers() {

  const response =
    await axios.get(
      "http://localhost:3001/users"
    );

  console.log(
    response.data
  );
}

getUsers();