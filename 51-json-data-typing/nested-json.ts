type User = {
  id: number;
  profile: {
    email: string;
    active: boolean;
  };
};

const jsonData = `
{
  "id": 1,
  "profile": {
    "email": "ali@test.com",
    "active": true
  }
}
`;

const user: User =
  JSON.parse(jsonData);

console.log(user);