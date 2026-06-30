
type Events = {
  login: string;
  logout: string;
};

function emit<K extends keyof Events>(
  event: K,
  payload: Events[K]
) {
  console.log(
    event,
    payload
  );
}

emit(
  "login",
  "Ali"
);