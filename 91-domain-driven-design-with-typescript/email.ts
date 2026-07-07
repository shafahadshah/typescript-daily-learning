export class Email {

  constructor(
    public value: string
  ) {}

  isValid() {
    return this.value
      .includes("@");
  }
}

const email =
  new Email(
    "ali@test.com"
  );

console.log(
  email.isValid()
); 