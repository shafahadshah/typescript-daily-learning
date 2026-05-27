async function asyncHandler(
  fn: () => Promise<void>
) {

  try {

    await fn();

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

asyncHandler(
  async () => {

    throw new Error(
      "Wrapper error"
    );

  }
);