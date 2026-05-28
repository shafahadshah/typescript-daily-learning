function safeParse<T>(
  data: string
): T | null {

  try {

    return JSON.parse(data);

  } catch {

    return null;
  }
}

type User = {
  name: string;
};

const result =
  safeParse<User>(
    '{"name":"Ali"}'
  );

console.log(result);