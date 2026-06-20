export function debounce(
  callback: Function,
  delay: number
) {

  let timer:
    ReturnType<
      typeof setTimeout
    >;

  return (
    ...args: unknown[]
  ) => {

    clearTimeout(
      timer
    );

    timer =
      setTimeout(
        () => {
          callback(
            ...args
          );
        },
        delay
      );
  };
}