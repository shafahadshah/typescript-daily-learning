// Generic + union (fixed)

type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function handleResponse<T>(res: ApiResponse<T>): T {
  if (res.status === "success") {
    return res.data;
  }
  throw new Error(res.message);
}

// ✅ Explicit type helps inference
console.log(handleResponse<number>({ status: "success", data: 123 }));

try {
  console.log(handleResponse<number>({ status: "error", message: "Oops!" }));
} catch (e) {
  console.log((e as Error).message);
}