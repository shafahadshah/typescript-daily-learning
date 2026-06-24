type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | {
      [key: string]:
        JsonValue;
    };

const data: JsonValue = {
  user: {
    name: "Ali",
    age: 20,
  },

  skills: [
    "TS",
    "React",
  ],
};

console.log(data);