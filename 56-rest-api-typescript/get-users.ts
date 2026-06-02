import express from "express";

const app = express();

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000);