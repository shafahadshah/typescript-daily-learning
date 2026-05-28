type User = {
  id: number;
  name: string;
};

const jsonData = `
{
  "id": 1,
  "name": "Ali"
}
`;

const user: User =
  JSON.parse(jsonData);

console.log(user);