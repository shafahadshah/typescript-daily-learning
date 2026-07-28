type PaymentRequest = {
  amount: number;
  currency: string;
};

const payment:
  PaymentRequest = {
    amount: 100,
    currency: "USD",
};

console.log(payment);   