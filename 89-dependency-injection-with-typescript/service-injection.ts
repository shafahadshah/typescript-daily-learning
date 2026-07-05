class EmailService {

  send(
    email: string
  ) {
    console.log(
      `Sent to ${email}`
    );
  }
}

class NotificationService {

  constructor(
    private emailService:
      EmailService
  ) {}

  notify() {
    this.emailService.send(
      "user@test.com"
    );
  }
}

const service =
  new NotificationService(
    new EmailService()
  );

service.notify();