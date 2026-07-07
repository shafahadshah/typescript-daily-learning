export class User {

  constructor(
    public id: number,
    public name: string
  ) {}
}

const user =
  new User(
    1,
    "Ali"
  );

console.log(user);