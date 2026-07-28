type PaymentResponse = {
  success: boolean;
  transactionId: string;
};

const response:
  PaymentResponse = {
    success: true,
    transactionId: "TXN123456",
};

console.log(response);