type RequestData = {
  ip: string;
};

function handleRequest(
  request: RequestData
) {
  console.log(
    request.ip
  );
}

handleRequest({
  ip: "127.0.0.1",
});