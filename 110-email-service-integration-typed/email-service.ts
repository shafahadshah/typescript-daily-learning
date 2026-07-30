type Email = {
  to: string;
  subject: string;
  body: string;
};

function sendEmail(
  email: Email
): void {

  console.log(
    `Sending email to ${email.to}`
  );
}

sendEmail({
  to: "user@test.com",
  subject: "Welcome",
  body: "Hello!",
});