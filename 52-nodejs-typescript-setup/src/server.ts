import http from "http";

const server =
  http.createServer(
    (req, res) => {

      res.write(
        "Server running"
      );

      res.end();
    }
  );

server.listen(
  3000,
  () => {
    console.log(
      "Server started"
    );
  }
);