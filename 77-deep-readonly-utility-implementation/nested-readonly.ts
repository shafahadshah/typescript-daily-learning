type DeepReadonly<T> = {
  readonly [K in keyof T]:
    T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

type Profile = {
  user: {
    name: string;
    city: string;
  };
};

const profile:
  DeepReadonly<Profile> = {
    user: {
      name: "Ali",
      city: "Lahore",
    },
  };

console.log(profile);