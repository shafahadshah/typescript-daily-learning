let data: any = "hello";
data = 42;

let safeData: unknown = "world";

if (typeof safeData === "string") {
  console.log(safeData.toUpperCase());
}