import { OrderStatus } from "./status";

// Mapping enum to UI labels
export function getStatusLabel(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.Pending:
      return "Order Pending";
    case OrderStatus.Shipped:
      return "Order Shipped";
    case OrderStatus.Delivered:
      return "Order Delivered";
    case OrderStatus.Cancelled:
      return "Order Cancelled";
    default:
      return "Unknown Status";
  }
}