import express
from "express";

const app = express();

app.get(
  "/orders",
  (req, res) => {
    res.json([
      {
        id: 101,
        total: 500,
      },
    ]);
  }
);

app.listen(
  3002,
  () => {
    console.log(
      "Order Service"
    );
  }
);