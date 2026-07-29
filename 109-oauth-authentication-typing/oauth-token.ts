type OAuthToken = {
  accessToken: string;
  refreshToken: string;
};

const token:
  OAuthToken = {
    accessToken:
      "abc123",
    refreshToken:
      "xyz456",
};

console.log(token);