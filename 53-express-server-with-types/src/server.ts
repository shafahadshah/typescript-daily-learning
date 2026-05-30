import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express TS");
});

app.listen(3000, () => {
  console.log("Server running");
});