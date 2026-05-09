async function fetchData<T>(
  data: T
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

fetchData({ name: "Ali" }).then(console.log);