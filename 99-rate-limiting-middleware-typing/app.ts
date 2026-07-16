type ApiRequest = {
  ip: string;
};

type Middleware = (
  request: ApiRequest,
  next: () => void
) => void;

const rateLimiter:
  Middleware =
  (
    request,
    next
  ) => {

    console.log(
      `Allowed: ${request.ip}`
    );

    next();
  };

rateLimiter(
  {
    ip: "127.0.0.1",
  },
  () => {
    console.log(
      "Request handled"
    );
  }
);