type Events = {
  message: string;
  count: number;
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
  "message",
  "Hello"
);

emit(
  "count",
  10
);