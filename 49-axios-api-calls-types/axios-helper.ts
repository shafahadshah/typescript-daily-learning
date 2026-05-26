import axios from "axios";

async function fetchData<T>(
  url: string
): Promise<T> {

  const response =
    await axios.get<T>(
      url
    );

  return response.data;
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