async function fetchUser() {

  try {

    throw new Error(
      "User not found"
    );

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

fetchUser();