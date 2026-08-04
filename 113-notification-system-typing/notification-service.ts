type Notification = {
  id: number;
  title: string;
  message: string;
};

class NotificationService {

  send(
    notification:
      Notification
  ): void {

    console.log(
      notification
    );
  }
}

const service =
  new NotificationService();

service.send({
  id: 1,
  title: "Success",
  message: "Profile updated",
});