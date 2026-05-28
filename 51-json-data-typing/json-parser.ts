function parseJSON<T>(
  data: string
): T {

  return JSON.parse(data);
}

type Todo = {
  id: number;
  completed: boolean;
};

const jsonData = `
{
  "id": 1,
  "completed": true
}
`;

const todo =
  parseJSON<Todo>(
    jsonData
  );

console.log(todo); 