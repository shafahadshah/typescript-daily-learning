type Comment = {
  id: number;
  text: string;
  replies: Comment[];
};

const comment: Comment = {
  id: 1,
  text: "Great post",

  replies: [
    {
      id: 2,
      text: "Thanks",
      replies: [],
    },
  ],
};

console.log(comment);