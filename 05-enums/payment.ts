// Enum for payment methods
export enum PaymentMethod {
  CreditCard = "CREDIT_CARD",
  PayPal = "PAYPAL",
  UPI = "UPI"
}

export function processPayment(method: PaymentMethod) {
  switch (method) {
    case PaymentMethod.CreditCard:
      console.log("Processing credit card");
      break;
    case PaymentMethod.PayPal:
      console.log("Processing PayPal");
      break;
    case PaymentMethod.UPI:
      console.log("Processing UPI");
      break;
  }
}