type User = {
  name: string;

  skills: {
    title: string;
    level: number;
  }[];
};

const user: User = {
  name: "Ali",

  skills: [
    {
      title: "TypeScript",
      level: 5,
    },
    {
      title: "React",
      level: 4,
    },
  ],
};

console.log(user);