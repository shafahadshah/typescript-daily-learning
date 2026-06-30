type Events = {
  login: string;
};

function on<K extends keyof Events>(
  event: K,
  listener: (
    payload: Events[K]
  ) => void
) {
  listener("Ali");
}

on(
  "login",
  (user) => {
    console.log(user);
  }
);