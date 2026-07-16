type ApiRequest = {
  ip: string;
};

function rateLimit(
  request: ApiRequest
): boolean {

  console.log(
    `Checking ${request.ip}`
  );

  return true;
}

console.log(
  rateLimit({
    ip: "127.0.0.1",
  })
);