class Logger {

  log(
    message: string
  ) {
    console.log(
      message
    );
  }
}

class UserService {

  constructor(
    private logger:
      Logger
  ) {}

  getUser() {
    this.logger.log(
      "Getting user"
    );
  }
}

const service =
  new UserService(
    new Logger()
  );

service.getUser();