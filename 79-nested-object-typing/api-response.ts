type ApiResponse = {
  success: boolean;

  data: {
    user: {
      id: number;
      name: string;
    };
  };
};

const response: ApiResponse = {
  success: true,

  data: {
    user: {
      id: 1,
      name: "Ali",
    },
  },
};

console.log(response);