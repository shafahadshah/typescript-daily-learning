type ApiRequest = {
  ip: string;
};

type Next =
  () => void;

function rateLimiter(
  request: ApiRequest,
  next: Next
) {

  console.log(
    request.ip
  );

  next();
}

rateLimiter(
  {
    ip: "127.0.0.1",
  },
  () => {
    console.log(
      "Next middleware"
    );
  }
);