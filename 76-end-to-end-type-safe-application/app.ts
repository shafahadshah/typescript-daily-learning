import {
  getUser,
} from "./api";

async function main() {

  const result =
    await getUser();

  console.log(
    result.data.email
  );
}

main();