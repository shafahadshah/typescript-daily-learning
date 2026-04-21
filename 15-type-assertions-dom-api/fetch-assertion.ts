// API response assertion

type User = {
  id: number;
  name: string;
};

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = (await res.json()) as User;

  console.log(data.name);
}

getUser();