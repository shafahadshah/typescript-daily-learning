type PaymentRequest = {
  amount: number;
  currency: string;
};

type PaymentResponse = {
  success: boolean;
  transactionId: string;
};

function processPayment(
  payment:
    PaymentRequest
): PaymentResponse {

  return {
    success: true,
    transactionId:
      "TXN123456",
  };
}

console.log(
  processPayment({
    amount: 200,
    currency: "USD",
  })
);