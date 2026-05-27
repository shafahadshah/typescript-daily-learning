async function getUsers() {

  try {

    const response =
      await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

    if (!response.ok) {
      throw new Error(
        "Failed request"
      );
    }

    const data =
      await response.json();

    console.log(data);

  } catch (error) {

    if (
      error instanceof Error
    ) {
      console.log(
        error.message
      );
    }
  }
}

getUsers();