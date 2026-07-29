type OAuthUser = {
  id: string;
  name: string;
};

type OAuthToken = {
  accessToken: string;
};

const user:
  OAuthUser = {
    id: "1",
    name: "Ali",
};

const token:
  OAuthToken = {
    accessToken:
      "abc123",
};

console.log(
  user,
  token
);