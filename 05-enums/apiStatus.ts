// Enum for API responses
export enum ApiStatus {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING"
}

// Example function
export function handleResponse(status: ApiStatus) {
  if (status === ApiStatus.Loading) {
    console.log("Loading...");
  } else if (status === ApiStatus.Success) {
    console.log("Data fetched");
  } else {
    console.log("Something went wrong");
  }
}