type Status =
  | "success"
  | "error"
  | "warning";

const statusColors: Record<
  Status,
  string
> = {
  success: "green",
  error: "red",
  warning: "yellow",
};

console.log(statusColors);