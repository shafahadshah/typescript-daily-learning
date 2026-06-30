class EventEmitter<
  T extends Record<
    string,
    unknown
  >
> {
  emit<
    K extends keyof T
  >(
    event: K,
    payload: T[K]
  ) {
    console.log(
      event,
      payload
    );
  }
}

type Events = {
  login: string;
};

const emitter =
  new EventEmitter<
    Events
  >();

emitter.emit(
  "login",
  "Ali"
);