type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers() {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

  const data: User[] =
    await response.json();

  console.log(data);
}

getUsers();