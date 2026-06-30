type UserEvents = {
  created: {
    id: number;
    name: string;
  };

  deleted: number;
};

function emit<
  K extends keyof UserEvents
>(
  event: K,
  payload:
    UserEvents[K]
) {
  console.log(
    event,
    payload
  );
}

emit(
  "created",
  {
    id: 1,
    name: "Ali",
  }
);

emit(
  "deleted",
  1
);