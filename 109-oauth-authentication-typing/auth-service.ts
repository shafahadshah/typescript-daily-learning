type OAuthToken = {
  accessToken: string;
  refreshToken: string;
};

function authenticate():
  OAuthToken {

  return {
    accessToken:
      "abc123",
    refreshToken:
      "xyz456",
  };
}

console.log(
  authenticate()
);