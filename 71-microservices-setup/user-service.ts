import express
from "express";

const app = express();

app.get(
  "/users",
  (req, res) => {
    res.json([
      {
        id: 1,
        name: "Ali",
      },
    ]);
  }
);

app.listen(
  3001,
  () => {
    console.log(
      "User Service"
    );
  }
);