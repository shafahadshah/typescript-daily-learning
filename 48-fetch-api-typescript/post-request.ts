type NewUser = {
  name: string;
};

async function createUser(
  user: NewUser
) {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          user
        ),
      }
    );

  const data =
    await response.json();

  console.log(data);
}

createUser({
  name: "Ali",
});