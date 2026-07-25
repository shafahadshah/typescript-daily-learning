type User = {
  id: number;
  name: string;
};

async function
getUser():
Promise<User> {

  return {
    id: 1,
    name: "Ali",
  };
}

getUser().then(
  console.log
);