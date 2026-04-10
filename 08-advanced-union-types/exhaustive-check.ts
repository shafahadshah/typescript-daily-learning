// Exhaustive checking

type Status = "loading" | "success" | "error";

function handle(status: Status) {
  switch (status) {
    case "loading":
      return "Loading...";
    case "success":
      return "Done!";
    case "error":
      return "Failed!";
    default:
      const _never: never = status;
      return _never;
  }
}

console.log(handle("loading"));
console.log(handle("success"));
console.log(handle("error"));