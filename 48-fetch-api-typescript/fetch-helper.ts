async function fetchData<T>(
  url: string
): Promise<T> {
  const response =
    await fetch(url);

  return response.json();
}

type Product = {
  id: number;
  title: string;
};

async function getProducts() {
  const products =
    await fetchData<Product[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

  console.log(products);
}

getProducts();