type Users = {
  id: number;
  name: string;
}[];

type SingleUser = Users[number];

const user: SingleUser = {
  id: 1,
  name: "Sara",
};

console.log(user);